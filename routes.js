// Auth
export const LOGIN = "/";
export const REGISTER = "/register";
export const FORGOTPASSWORD = "/resetpassword/:token";
export const DASHBOARD = "/dashboard";

//qr code
export const SCAN_QR_CODE = "/scan-qrcode";

// teacher dashboard
export const TEACHERDASHBOARD = `${DASHBOARD}/teacher`;
export const TEACHERATTENDANCE = `${TEACHERDASHBOARD}/attendance`;
export const TEACHERMARKS = `${TEACHERDASHBOARD}/marks`;
export const SUBMITTEDASSINGMENTS = `${TEACHERDASHBOARD}/submissions`;
export const ADDSTUDENTS = `${TEACHERDASHBOARD}/addStudents`;
export const TEACHERFEEDBACK = `${TEACHERDASHBOARD}/feedback`;
export const UPLOADASSIGNMENT = `${TEACHERDASHBOARD}/uploadAssignment`;
export const QUIZ = `${TEACHERDASHBOARD}/Quiz`;
export const EDITQUIZ = `${TEACHERDASHBOARD}/EditQuiz/:id`;
export const TEACHERQUIZMARKS = `${TEACHERDASHBOARD}/quizMarks`;
export const TEACHER_CREATE_CALL = `${TEACHERDASHBOARD}/room`;

export const JOIN_SESSION = `/room/:roomID`;

// STUDENT DASHBOARD
export const STUDENTDASHBOARD = `${DASHBOARD}/student`;
export const STUDENTATTENDANCE = `${STUDENTDASHBOARD}/attendance`;
export const STUDENTMARKS = `${STUDENTDASHBOARD}/marks`;
export const STUDENTFEEDBACK = `${STUDENTDASHBOARD}/feedback`;
export const SUBMITASSIGNMENTS = `${STUDENTDASHBOARD}/submissions`;
export const DOWNLOADASSIGNMENTS = `${STUDENTDASHBOARD}/downloadAssignments`;
export const TEACHERLIST = `${STUDENTDASHBOARD}/teacherList`;
export const TEACHERQUIZES = `${STUDENTDASHBOARD}/teacherList/:id/quizes`;
export const TAKEQUIZ = `${STUDENTDASHBOARD}/teacherList/:id/quizes/:quiz_id`;
export const QUIZMARKS = `${STUDENTDASHBOARD}/quizMarks`;
export const JOIN_CALL = `${STUDENTDASHBOARD}/join-call`;
