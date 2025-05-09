export const metadata = {
    title: "Feedback",
    description: "a global legislations aggregator and navigator for marginalised communities",
};

import PageIllustration from "@/components/page-illustration";

export default function Feedback() {
    return (
        <>
        <PageIllustration />
        <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Give Feedback</h1>
        <p className="text-lg mb-6">
            Have suggestions, bugs to report, or kind words? I'd love to hear from you.
        </p>
        <p className="text-lg mb-6">
            Please use the feedback form linked below. Your input helps shape the future of EquiRights.
        </p>
        <a
            href="https://forms.gle/uv9ptan93N5SGYB27"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 text-white py-[5px] px-4 rounded-md hover:bg-[length:100%_150%]"
        >
            Open Feedback Form
        </a>
        </div>
        </>
    );
}