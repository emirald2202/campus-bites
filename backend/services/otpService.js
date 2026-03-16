let otpstore = {};

const genOtp = () => {
    return Math.floor(100000 + Math.random() * 900000);
};

const saveOtp = (email, otp) => {
    otpstore[email] = otp;
};

const verifyOtp = (email, otp) => {
    return otpstore[email] == otp;
};

module.exports = {
    genOtp,
    saveOtp,
    verifyOtp
};
