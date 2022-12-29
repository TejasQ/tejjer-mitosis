import { useState } from "@builder.io/mitosis";
import Avatar from "./Avatar";
import Button from "./Button";

type Props = {
  me: { name: string; profile_image_url: string };
  token: string;
};

export default function Composer(props: Props) {
  const [tweet, setTweet] = useState("");

  return (
    <>
      <div>
        <div className="flex items-center gap-4 p-4">
          <div>
            <Avatar
              alt={props.me.name}
              url={props.me.profile_image_url}
              size={64}
            />
          </div>
          <div className="w-full">
            <textarea
              id="composer"
              className="w-full p-4 text-xl border border-gray-300 rounded dark:border-0 dark:text-white dark:bg-black"
              placeholder="What's happening?"
              value={tweet}
              onChange={(event) => setTweet(event.target.value)}
            />
          </div>
        </div>
        <div className="grid p-4 grid-cols-[1fr,auto]">
          <ul className="flex items-center gap-4">
            <li>
              <button onClick={() => alert("Not yet implemented!")}>📸</button>
            </li>
            <li>
              <button onClick={() => alert("Not yet implemented!")}>📊</button>
            </li>
            <li>
              <button onClick={() => alert("Not yet implemented!")}>😄</button>
            </li>
            <li>
              <button onClick={() => alert("Not yet implemented!")}>🕙</button>
            </li>
            <li>
              <button onClick={() => alert("Not yet implemented!")}>📍</button>
            </li>
          </ul>
          <div>
            <Button
              condensed
              onClick={() => {
                postTweet({ text: tweet, token: props.token });
              }}
            >
              Tweet
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export const postTweet = async ({
  text,
  token,
}: {
  text: string;
  token: string;
}) => {
  return await fetch("/api/tweet", {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((r) => r.json())
    .then(() => alert("Done!"));
};
