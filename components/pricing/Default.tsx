import { cn } from "@/lib/utils";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface MarkerProps extends React.ComponentPropsWithoutRef<"div"> {
  muted?: boolean;
}

export const Marker = (props: MarkerProps) => (
  <div
    className={cn(
      "rounded-full",
      props.muted ? "" : "bg-primary/10 text-primary",
      props.className
    )}
    {...props}
  />
);

export default function PriceCardSimple() {
  return (
    <div className="w-full max-w-sm p-4 bg-gray-50 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-primary dark:text-gray-400">
        Standard plan
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">49</span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /month
        </span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <Marker>
            <CheckCircledIcon className="w-5 h-5" />
          </Marker>

          <span className="text-base font-normal leading-tight text-primary-500 dark:text-primary-400 ms-3">
            2 team members
          </span>
        </li>
        <li className="flex">
          <Marker muted>
            <CheckCircledIcon className="w-4 h-4 text-blue-600 dark:text-blue-500" />
          </Marker>
          <span className="text-base font-normal leading-tight text-primary-500 dark:text-primary-400 ms-3">
            20GB Cloud storage
          </span>
        </li>
        <li className="flex">
          <CheckCircledIcon className="w-4 h-4 text-blue-600 dark:text-blue-500" />
          <span className="text-base font-normal leading-tight text-primary-500 dark:text-primary-400 ms-3">
            Integration help
          </span>
        </li>
        <li className="flex line-through decoration-gray-500">
          <CheckCircledIcon
            className="w-12 h-12 text-red-600 dark:text-slate-500"
            style={{ color: "var(--accent-11)" }}
          />
          <span className="text-base font-light leading-tight text-gray-500 ms-3">
            Sketch Files
          </span>
        </li>
        <li className="flex line-through decoration-gray-500">
          <CheckCircledIcon className="w-4 h-4 text-slate-600 dark:text-slate-500" />
          <span className="text-base font-light leading-tight text-gray-500 ms-3">
            API Access
          </span>
        </li>
        <li className="flex line-through decoration-gray-500">
          <CheckCircledIcon className="w-4 h-4 text-slate-600 dark:text-slate-500" />
          <span className="text-base font-light leading-tight text-gray-500 ms-3">
            Complete documentation
          </span>
        </li>
        <li className="flex line-through decoration-gray-500">
          <CheckCircledIcon className="w-4 h-4 text-slate-600 dark:text-slate-500" />
          <span className="text-base font-light leading-tight text-gray-500 ms-3">
            24×7 phone & email support
          </span>
        </li>
      </ul>
      <button
        className="btn btn-primary w-full"
        // className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Choose plan
      </button>
    </div>
  );
}
