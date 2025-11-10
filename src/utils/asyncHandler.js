// higher order function mens passing a function in another function in that too we are passing an another function
// const asyncHandler = (func) => async(
//     req, res, next  
// )=>{
//     try {
//         await func(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message || "Internal Server Error"
//         })
//     }
// }

const asyncHandler = (requestHandler) => {
    (req , res, next) => {
        Promise.resolve(requestHandler(req , res , next)).catch((err) => next((err)))
    }
}
export {asyncHandler}