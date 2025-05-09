import React, { useState } from "react";
import { projectPatchEditApi } from "../../api/user";

const EditPopup = ({ onClose, onSuccess, project_id, item, itemValue }) => {
    // const [key, setkey] = useState(item);
    const [keyValue, setKeyValue] = useState(itemValue);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // const url = window.location.href.split("/")[5];
            const payload = {
               uuid:project_id,
            };
            payload[item]=keyValue

            const response = await projectPatchEditApi(payload);

            if (response.status === 200 || response.status === 201) {
                onSuccess();
                onClose();
            } else {
                setError("Failed to submit remark.");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Edit "{item}" Fields</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* <textarea
                        value={remark}
                        onChange={(e) => setRemark(e.target.value)}
                        placeholder="Enter remarks..."
                        required
                        className="w-full p-3 border bg-gray-200 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    /> */}
                    <textarea
                        value={keyValue}
                        onChange={(e) => setKeyValue(e.target.value)}
                        placeholder="Enter current status..."
                        required
                        className="w-full p-3 border bg-gray-200 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPopup;
