const GET = "GET";
const POST = "POST";

async function apiCall(uri, method = GET, body = null, headers = {}) {
    const BASE_URI = import.meta.env.VITE_BASE_URI;
    body = body ? JSON.stringify(body) : null;

    try {
        const resp = await fetch(BASE_URI + uri, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            body: body,
        });
        if (!resp.ok) {
            throw new Error(`HTTP error! Status: ${resp.status}`);
        }
        return await resp.json();
    } catch (error) {
        console.error("API Call Error:", error);
        return { success: false, error: error.message };
    }
}

export { GET, POST };
export default apiCall;
