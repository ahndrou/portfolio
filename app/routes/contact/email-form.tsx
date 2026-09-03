export function EmailForm() {
  return (
    <>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="grid grid-cols-2 gap-5"
      >
        {/* Necessary when using Netlify forms with client-rendered or SSR forms. */}
        <input type="hidden" name="form-name" value="contact" />

        <label className="hidden">
          If this visually hidden input is filled in, the submission is flagged
          as spam.
          <input type="text" name="bot-field" />
        </label>

        <SimpleInput name="name" />
        <SimpleInput name="email" />
        <SimpleInput name="subject" className="col-span-2" />

        <MessageTextArea className="col-span-2" />

        <SubmitButton />
      </form>
    </>
  );
}

function SimpleInput({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const cn = `grid gap-2 ${className}`;

  return (
    <label className={cn}>
      <span className="text-text-quiet font-mono text-xs tracking-wide uppercase">
        {name}
      </span>
      <input
        type="text"
        name={name}
        placeholder={`${name}:`}
        className="border-line surface focus-visible:outline-line-strong w-full justify-center rounded-md border px-3 py-2 text-sm placeholder:capitalize focus-visible:outline-solid"
      />
    </label>
  );
}

function MessageTextArea({ className }: { className?: string }) {
  const cn = `grid gap-2 ${className}`;

  return (
    <label className={cn}>
      <span className="text-text-quiet font-mono text-xs tracking-wide uppercase">
        Message
      </span>
      <textarea
        name="message"
        placeholder="Message:"
        className="border-line surface focus-visible:outline-line-strong h-[10rem] w-full justify-center rounded-md border px-3 py-2 text-sm focus-visible:outline-solid"
      />
    </label>
  );
}

function SubmitButton() {
  return (
    <label className="max-w-[12rem]">
      <span className="hidden">Send message</span>
      <button
        type="submit"
        className="bg-accent text-accent-ink flex w-full cursor-pointer items-center justify-center rounded-md py-2 text-center font-mono text-sm font-medium"
      >
        Send Message
      </button>
    </label>
  );
}
