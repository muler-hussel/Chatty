import { Hash } from "lucide-react";

interface ChatWelcomeProps {
  name: string;
  type: "channel" | "conversation"
}

export const ChatWelcome = ({
  name,
  type
}: ChatWelcomeProps) => {
  return (
    <div className="space-y-2 px-4 mb-4">
      {type === "channel" && (
        <div className="h-[50px] w-[50px] rounded-full bg-zinc-400 dark:bg-zinc-400 flex items-center justify-center">
          <Hash className="h-8 w-8 text-white dark:text-black" />
        </div>
      )}
      <p className="text-xl md:text-xl font-bold text-zinc-600 dark:text-zinc-100">
        {type === "channel" ? "Welcome to #" : ""}{name}
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        {type === "channel"
        ? `This is the start of the #${name} channel.`
        : `This is the start of your conversation with ${name}.`}
      </p>
    </div>
  )
}