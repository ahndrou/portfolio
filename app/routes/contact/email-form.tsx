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

        <SimpleInput name="name" placeholder="John Doe" />
        <SimpleInput name="email" placeholder="john.doe@example.com" />
        <SimpleInput
          name="subject"
          placeholder="Reaching out about an opportunity"
          className="col-span-2"
        />

        <MessageTextArea
          placeholder="Hi there, I came across your background and thought you might be a great fit for an opportunity we have open. Would love to share more if you're interested."
          className="col-span-2"
        />

        <SubmitButton />
      </form>
    </>
  );
}

function SimpleInput({
  name,
  className,
  placeholder,
}: {
  name: string;
  placeholder: string;
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
        placeholder={placeholder}
        className="border-line surface focus-visible:outline-line-strong w-full justify-center rounded-md border px-3 py-2 text-sm focus-visible:outline-solid"
      />
    </label>
  );
}

function MessageTextArea({
  className,
  placeholder,
}: {
  className?: string;
  placeholder: string;
}) {
  const cn = `grid gap-2 ${className}`;

  return (
    <label className={cn}>
      <span className="text-text-quiet font-mono text-xs tracking-wide uppercase">
        Message
      </span>
      <textarea
        name="message"
        placeholder={placeholder}
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
