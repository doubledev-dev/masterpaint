import { useTranslations } from "@/i18n/utils";
import type { lang } from "@/types";
import { CircleCheckBig, CircleX, LoaderCircle } from "lucide-react";
import React, { useCallback, useState } from "react";

interface messageData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
  address: string;
  message: string;
}

const Contacts = ({ lang }: { lang: lang }) => {
  const [message, setMessage] = useState<messageData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<"success" | "fail" | null>(null);

  const t = useTranslations(lang);
  const contactForm = [
    {
      label: t("contact.form.name"),
      type: "text",
      name: "firstName",
    },
    {
      label: t("contact.form.surname"),
      type: "text",
      name: "lastName",
    },
    {
      label: t("contact.form.email"),
      type: "email",
      name: "email",
    },
    {
      label: t("contact.form.phone"),
      type: "tel",
      name: "phoneNumber",
    },
    {
      label: t("contact.form.company"),
      type: "text",
      name: "company",
    },
    {
      label: t("contact.form.address"),
      type: "text",
      name: "address",
    },
    {
      label: t("contact.form.message"),
      type: "textarea",
      name: "message",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      fetch("https://formspree.io/f/mayrgnvo", {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            setLoading(false);
            setStatus("success");
            setMessage({
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              company: "",
              address: "",
              message: "",
            });
          }
        })
        .catch(() => {
          setLoading(false);
          setStatus("fail");
        });
    },
    [message]
  );

  return (
    <section className="bg-gradient-to-t from-accent-dark-blue via-primary-700 via-20% to-transparent to-85% p-8">
      <div className="p-8 text-primary-800 lg:hidden">
        <h1 className="font-Inter text-3xl font-semibold italic">
          {t("contact.form.title")}
        </h1>
        <h2 className="mt-2 text-xl font-thin">{t("contact.form.desc")}</h2>
      </div>
      <article className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
        <div className="col-span-2 min-h-[60vh] rounded-3xl bg-white p-4 text-gray-700">
          {status === null ? (
            loading ? (
              <div className="flex size-full flex-col items-center justify-center text-black">
                <LoaderCircle
                  className="size-12 animate-spin"
                  strokeWidth={2}
                />
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="col-span-2 rounded-3xl bg-white p-4 text-gray-700 lg:p-8"
              >
                <div className="grid grid-cols-1 gap-x-4 gap-y-12 lg:grid-cols-2">
                  {contactForm.map((form) =>
                    form.type === "textarea" ? (
                      <div key={form.name} className="lg:col-span-2">
                        <label className="block">{form.label}</label>
                        <textarea
                          aria-label={form.name}
                          key={form.name}
                          name={form.name}
                          placeholder={t("contact.form.message.desc")}
                          className="mt-1 block w-full resize-none border-b-2 border-gray-700 p-2"
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div
                        key={form.name}
                        className="col-span-1 flex size-full flex-col justify-between"
                      >
                        <label className="block">{form.label}</label>
                        <input
                          aria-label={form.name}
                          key={form.name}
                          type={form.type}
                          name={form.name}
                          className="mt-1 block w-full border-b-2 border-gray-700 p-2"
                          onChange={handleChange}
                        />
                      </div>
                    )
                  )}
                </div>
                <button className="mx-auto mt-8 flex justify-items-end rounded-full bg-primary-800 p-2 px-4 align-baseline text-white hover:bg-primary-600 lg:mx-0 lg:ml-auto lg:p-4 lg:px-8">
                  {t("contact.form.button")}
                </button>
              </form>
            )
          ) : status === "success" ? (
            <div className="flex size-full flex-col items-center justify-center gap-y-2 text-black">
              <CircleCheckBig
                className="size-12 text-primary-800"
                strokeWidth={2}
              />
              <p className="text-xl font-medium text-primary-800">
                {t("contact.success")}
              </p>
            </div>
          ) : (
            <div className="flex size-full flex-col items-center justify-center gap-y-2 text-black">
              <CircleX className="size-12 text-primary-800" strokeWidth={2} />
              <p className="text-xl font-medium text-primary-800">
                {t("contact.fail")}
              </p>
            </div>
          )}
        </div>

        <div className="hidden p-8 text-primary-800 lg:block">
          <h1 className="font-Inter text-3xl font-semibold italic">
            {t("contact.form.title")}
          </h1>
          <h2 className="mt-2 text-xl font-thin">{t("contact.form.desc")}</h2>
        </div>
      </article>
    </section>
  );
};

export default Contacts;
