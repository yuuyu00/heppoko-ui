import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("田中太郎");
  const [email, setEmail] = useState("sample@example.com");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isSubmitting) {
      return;
    }

    setTimeout(() => {
      setCount((count) => count - 1);
    }, 1000);
  }, [isSubmitting, count]);

  const onSubmit = () => {
    if (message.length < 1000) {
      setErrorMessage("参加理由は1000文字以上で入力してください。");
      return;
    }

    setErrorMessage("");
    setCount(60);
    setIsSubmitting(true);
    return;
  };

  const onCancel = () => {
    setIsSubmitting(false);
    setCount(0);
  };

  const cancelButtonStyle =
    isSubmitting === false
      ? ""
      : count % 2 === 0
      ? "text-white font-bold bg-red-600"
      : "text-red-600 font-bold bg-white";

  return (
    <main className="flex flex-col gap-8 justify-center items-center min-h-screen">
      <h1 className="scroll-m-20 pb-10 text-4xl font-extrabold tracking-tight lg:text-5xl">
        イベント参加申し込みフォーム
      </h1>
      {/* <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div> */}

      {/* <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div> */}

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">お名前を教えてください</Label>
        <Input
          type="text"
          id="name"
          className="text-gray-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">メールアドレスを教えてください</Label>
        <Input
          type="email"
          id="email"
          className="text-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">参加理由を教えてください</Label>
        <Textarea
          className="max-w-md"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="text-red-600">{errorMessage}</div>
      </div>

      {/* <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup> */}

      <div className="flex flex-col items-end w-[50vw]">
        <div className="flex flex-row justify-end">
          <button
            className={`${
              !isSubmitting ? "text-gray-600" : ""
            } text-xs mr-4 rounded-md px-2 ${cancelButtonStyle}`}
            onClick={onCancel}
          >
            キャンセル
          </button>
          <Button onClick={onSubmit} disabled={isSubmitting}>
            送信
          </Button>
        </div>
        {isSubmitting && (
          <div className="mt-2">
            <span className="text-red-600">{count}</span>
            秒後に送信確定します...
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
