export const asyncHandler = (handler) => (req, res) => {
    try {
        handler(req, res);
    } catch (error) {
        throw error
    }
}