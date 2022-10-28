import { Disclosure, Transition } from "@headlessui/react";
import { Trans } from "@lingui/macro";

const FAQ = ({ faqs }: { faqs: { q: string; a: string }[] }) => (
  <div className="my-4">
    {faqs.map((faq, i) => (
      <Disclosure as="div" key={`faq-{i}`}>
        <Disclosure.Button className="py-2">
          <Trans>{faq.q}</Trans>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="text-gray-300">
            <Trans>{faq.a}</Trans>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    ))}
  </div>
);

export default FAQ;
