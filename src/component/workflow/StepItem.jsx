import SelectInput from "../form/SelectInput";

const stepOptions = [
    { label: "Clean Text", value: "clean_text" },
    { label: "Summarize", value: "summarize" },
    { label: "Extract Key Points", value: "extract_key_points" },
    { label: "Tag Category", value: "tag_category" },
];

export default function StepItem({ step, index, onChange, onRemove }) {
    return (
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ flex: 1 }}>
                <SelectInput
                    label={`Step ${index + 1}`}
                    value={step.type}
                    options={stepOptions}
                    onChange={(e) => onChange(index, e.target.value)}
                />
            </div>

            <button
                onClick={() => onRemove(index)}
                style={{
                    marginTop: 22,
                    background: "transparent",
                    border: "none",
                    color: "red",
                    cursor: "pointer",
                }}
            >
                Remove
            </button>
        </div>
    );
}
