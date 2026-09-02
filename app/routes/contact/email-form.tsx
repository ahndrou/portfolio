export function EmailForm() {
  return (
    <>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="grid gap-3"
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
        <SimpleInput name="subject" />

        <MessageTextArea />

        <SubmitButton />
      </form>
    </>
  );
}

function SimpleInput({ name }: { name: string }) {
  return (
    <label>
      <span className="hidden">{name}</span>
      <input
        type="text"
        name={name}
        placeholder={`${name}:`}
        className="bg-bg border-line glow text-sm rounded-md focus-visible:outline-accent w-full justify-center border px-3 py-2 placeholder:capitalize focus-visible:outline-solid"
      />
    </label>
  );
}

function MessageTextArea() {
  return (
    <label>
      <span className="hidden">Message</span>
      <textarea
        name="message"
        placeholder="Message:"
        className="bg-bg border-line glow text-sm rounded-md focus-visible:outline-accent h-[10rem] w-full justify-center border px-3 py-2 focus-visible:outline-solid"
      />
    </label>
  );
}

function SubmitButton() {
  return (
    <label>
      <span className="hidden">Submit</span>
      <button
        type="submit"
        className="text-sm rounded-md bg-accent text-accent-ink font-mono flex w-full cursor-pointer items-center justify-center py-2 text-center font-medium"
      >
        Submit
      </button>
    </label>
  );
}
