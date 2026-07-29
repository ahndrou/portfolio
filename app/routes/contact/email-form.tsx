export function EmailForm() {
  return (
    <>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        className="grid gap-200"
      >
        {/* Necessary when using Netlify forms with client-rendered or SSR forms. */}
        <input type="hidden" name="form-name" value="contact" />

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
        className="bg-bg-link border-brdr-surface box-glow text-100 rounded-reg focus-visible:outline-brdr-link w-full justify-center border px-200 py-100 placeholder:capitalize focus-visible:outline-solid"
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
        className="bg-bg-link border-brdr-surface box-glow text-100 rounded-reg focus-visible:outline-brdr-link h-[10rem] w-full justify-center border px-200 py-100 focus-visible:outline-solid"
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
        className="text-100 rounded-reg bg-bg-button font-button flex w-full cursor-pointer items-center justify-center py-100 text-center font-medium"
      >
        Submit
      </button>
    </label>
  );
}
