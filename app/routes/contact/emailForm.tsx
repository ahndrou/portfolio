export function EmailForm() {
  return (
    <form className="grid gap-200">
      <Input name="name" />
      <Input name="email" />
      <Input name="subject" />
      <MessageTextArea />
      <SubmitButton />
    </form>
  );
}

function Input({ name }: { name: string }) {
  return (
    <label>
      <span className="hidden">{name}</span>
      <input
        placeholder={`${name}:`}
        className="bg-bg-link border-brdr-surface box-glow text-100 rounded-reg w-full justify-center border px-200 py-100 placeholder:capitalize"
      />
    </label>
  );
}

function MessageTextArea() {
  return (
    <label>
      <span className="hidden">Message</span>
      <textarea
        placeholder="Message:"
        className="bg-bg-link border-brdr-surface box-glow text-100 rounded-reg h-[10rem] w-full justify-center border px-200 py-100"
      />
    </label>
  );
}

function SubmitButton() {
  return (
    <label>
      <span className="hidden">Submit</span>
      <button className="text-100 rounded-reg bg-bg-button font-button flex w-full cursor-pointer items-center justify-center py-100 text-center font-medium">
        Submit
      </button>
    </label>
  );
}
