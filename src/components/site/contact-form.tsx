"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircleIcon, CheckCircle2Icon, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/content/site";
import { solutions } from "@/content/solutions";
import { cn } from "@/lib/utils";

type Values = {
  name: string;
  email: string;
  organization: string;
  phone: string;
  interest: string;
  message: string;
};
type Field = keyof Values;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const empty: Values = { name: "", email: "", organization: "", phone: "", interest: "", message: "" };
const fieldOrder: Field[] = ["name", "email", "organization", "phone", "interest", "message"];
const labels: Record<Field, string> = {
  name: "Name",
  email: "Email",
  organization: "Organization",
  phone: "Phone",
  interest: "What would you like to discuss?",
  message: "Message",
};

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Enter an email address in the format name@organization.com.";
  if (v.phone.trim() && !/^[+()\d\s.-]{7,20}$/.test(v.phone.trim()))
    e.phone = "Enter a phone number using digits, spaces, dots, dashes or brackets.";
  if (!v.message.trim()) e.message = "Enter a message so we know how to help.";
  else if (v.message.length > 2000) e.message = "Keep your message under 2,000 characters.";
  return e;
}

function InterestAwareForm() {
  const param = useSearchParams().get("interest");
  const interest = param && solutions.some((s) => s.id === param) ? param : "";
  return <FormBody key={interest} initialInterest={interest} />;
}

export function ContactForm() {
  return (
    <Suspense fallback={<FormBody initialInterest="" />}>
      <InterestAwareForm />
    </Suspense>
  );
}

function FormBody({ initialInterest }: { initialInterest: string }) {
  const [values, setValues] = useState<Values>({ ...empty, interest: initialInterest });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [simulateError, setSimulateError] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const id = (f: string) => `contact-${f}`;

  useEffect(() => {
    if (status === "success" || status === "error") resultRef.current?.focus();
  }, [status]);

  function update(field: Field, value: string) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (touched[field]) setErrors((prev) => ({ ...prev, [field]: validate(next)[field] }));
  }

  function blur(field: Field) {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validate(values)[field] }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched(Object.fromEntries(fieldOrder.map((f) => [f, true])));
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setStatus("submitting");
    // Simulated delay only. No data leaves the browser.
    await new Promise((r) => setTimeout(r, 900));
    setStatus(simulateError ? "error" : "success");
  }

  function reset() {
    setValues(empty);
    setErrors({});
    setTouched({});
    setStatus("idle");
  }

  const errorList = fieldOrder.filter((f) => errors[f]);

  if (status === "success") {
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        role="status"
        className="border-t-4 border-green-800 bg-green-50 p-6 text-ink md:p-8"
      >
        <CheckCircle2Icon className="size-8 text-green-800" aria-hidden="true" />
        <h3 className="text-h3 mt-4">Thanks, {values.name.trim().split(" ")[0]}. Your message passed every check.</h3>
        <p className="mt-3 max-w-[52ch]">
          <strong>Nothing was sent.</strong> This is a prototype, so the form only demonstrates validation and
          confirmation. To reach Quantum Age today, email{" "}
          <a href={contact.emailHref} className="font-semibold text-plum underline">
            {contact.email}
          </a>{" "}
          or call{" "}
          <a href={contact.phoneHref} className="font-semibold text-plum underline">
            {contact.phoneDisplay}
          </a>
          .
        </p>
        <Button variant="outline" className="mt-6" onClick={reset}>
          Start a new message
        </Button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} aria-describedby={id("demo")} className="space-y-6">
      <p id={id("demo")} className="sr-only">
        Prototype form: this demonstration does not submit information to Quantum Age.
      </p>

      {status === "error" && (
        <div ref={resultRef} tabIndex={-1} role="alert" className="flex gap-3 border-l-4 border-error bg-[#fdecea] p-4 text-error">
          <AlertCircleIcon className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <div className="text-[0.9375rem]">
            <p className="font-semibold">We couldn&rsquo;t send your message.</p>
            <p className="mt-1 text-ink">
              This is a simulated delivery error. Your details are still here, so you can try again, or contact us
              directly at{" "}
              <a href={contact.emailHref} className="font-semibold text-plum underline">
                {contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby={id("summary-title")}
          className="border-l-4 border-error bg-[#fdecea] p-4"
        >
          <p id={id("summary-title")} className="font-semibold text-error">
            Please fix {errorList.length === 1 ? "1 problem" : `${errorList.length} problems`} before sending:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.9375rem]">
            {errorList.map((f) => (
              <li key={f}>
                <a href={`#${id(f)}`} className="text-ink underline hover:text-plum">
                  {errors[f]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="text-sm text-muted-foreground">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">required</span> are required.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <TextField id={id("name")} label={labels.name} required autoComplete="name" value={values.name} error={errors.name} onChange={(v) => update("name", v)} onBlur={() => blur("name")} />
        <TextField id={id("email")} label={labels.email} required type="email" autoComplete="email" inputMode="email" value={values.email} error={errors.email} onChange={(v) => update("email", v)} onBlur={() => blur("email")} />
        <TextField id={id("organization")} label={labels.organization} autoComplete="organization" value={values.organization} error={errors.organization} onChange={(v) => update("organization", v)} onBlur={() => blur("organization")} />
        <TextField id={id("phone")} label={labels.phone} type="tel" autoComplete="tel" inputMode="tel" value={values.phone} error={errors.phone} onChange={(v) => update("phone", v)} onBlur={() => blur("phone")} />
      </div>

      <div>
        <Label htmlFor={id("interest")} className="text-[0.9375rem] font-semibold text-ink">
          {labels.interest} <span className="font-normal text-muted-foreground">(optional)</span>
        </Label>
        <select
          id={id("interest")}
          value={values.interest}
          onChange={(e) => update("interest", e.target.value)}
          className="mt-2 h-12 w-full rounded-sm border border-input bg-surface px-3 text-base text-ink"
        >
          <option value="">Not sure yet</option>
          {solutions.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor={id("message")} className="text-[0.9375rem] font-semibold text-ink">
          {labels.message}{" "}
          <span aria-hidden="true" className="text-error">
            *
          </span>
        </Label>
        <p id={id("message-hint")} className="mt-1 text-sm text-muted-foreground">
          Tell us about your organization and what you would like to achieve.
        </p>
        <Textarea
          id={id("message")}
          required
          aria-required="true"
          rows={6}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => blur("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={cn(id("message-hint"), errors.message && id("message-error"))}
          className="mt-2"
        />
        <FieldError id={id("message-error")} message={errors.message} />
      </div>

      <fieldset className="border border-dashed border-notice/50 bg-notice-bg/60 p-4">
        <legend className="px-1 text-sm font-semibold text-notice">Prototype controls</legend>
        <label className="flex min-h-11 cursor-pointer items-center gap-3 text-[0.9375rem] text-ink">
          <input
            type="checkbox"
            checked={simulateError}
            onChange={(e) => setSimulateError(e.target.checked)}
            className="size-5 accent-plum"
          />
          Simulate a delivery error on send (to preview the error state)
        </label>
      </fieldset>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "submitting"} aria-describedby={id("demo-visible")}>
          {status === "submitting" ? (
            <>
              <Loader2Icon className="animate-spin" aria-hidden="true" />
              Checking your message…
            </>
          ) : (
            "Send message"
          )}
        </Button>
        <p id={id("demo-visible")} className="text-sm text-muted-foreground">
          Prototype: nothing is sent to Quantum Age.
        </p>
      </div>
      <p className="sr-only" aria-live="polite">
        {status === "submitting" ? "Checking your message." : ""}
      </p>
    </form>
  );
}

function TextField({
  id,
  label,
  required,
  value,
  error,
  onChange,
  onBlur,
  type = "text",
  autoComplete,
  inputMode,
}: {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  type?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-[0.9375rem] font-semibold text-ink">
        {label}{" "}
        {required ? (
          <span aria-hidden="true" className="text-error">
            *
          </span>
        ) : (
          <span className="font-normal text-muted-foreground">(optional)</span>
        )}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        required={required}
        aria-required={required || undefined}
        autoComplete={autoComplete}
        inputMode={inputMode}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2"
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-error">
      <AlertCircleIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}
