import React, { useEffect, useState } from "react";
import api from "../../api/client";

const WorkflowRunHistory = () => {
    const [runs, setRuns] = useState([]);
    const [openRunId, setOpenRunId] = useState(null);

    useEffect(() => {
        const fetchRuns = async () => {
            try {
                const res = await api.get("/runs");
                setRuns(res.data);
            } catch (error) {
                console.error("Error fetching runs:", error);
            }
        };

        fetchRuns();
    }, []);

    const toggleRun = (id) => {
        setOpenRunId(openRunId === id ? null : id);
    };

    return (
        <div>
            <h2>Workflow Run History</h2>

            {runs.length === 0 ? (
                <p>No runs yet</p>
            ) : (
                runs.map((run) => (
                    <div
                        key={run._id}
                        style={{
                            border: "1px solid #ddd",
                            padding: 12,
                            marginBottom: 12,
                            borderRadius: 6,
                        }}
                    >
                        <p><strong>Workflow:</strong> {run.workflowName || run.workflowId}</p>
                        <p><strong>Input:</strong> {run.inputText.slice(0, 80)}...</p>
                        <p><strong>Time:</strong> {new Date(run.createdAt).toLocaleString()}</p>

                        <button
                            onClick={() => toggleRun(run._id)}
                            style={{
                                marginTop: 8,
                                background: "#111",
                                color: "#fff",
                                padding: "6px 10px",
                                borderRadius: 4,
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            {openRunId === run._id ? "Hide Details" : "View Details"}
                        </button>

                        {openRunId === run._id && (
                            <div style={{ marginTop: 12 }}>
                                {run.stepOutputs.map((step, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            borderTop: "1px solid #eee",
                                            paddingTop: 8,
                                            marginTop: 8,
                                        }}
                                    >
                                        <strong>{step.stepType}</strong>
                                        <p style={{ whiteSpace: "pre-wrap" }}>{step.output}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default WorkflowRunHistory;
