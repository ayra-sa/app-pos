const responLogin = {
    status: '',
    auth_code: '',
};

const payloadLogin = {
    phone_number: '',
    remember_me: '',
};

const responVerifyOtpLogin = {
    access_token: '',
    refresh_token: '',
};

const payloadVerifyOtpLogin = {
    action: 'VOTPA_LOGIN',
    phone_number: '',
    auth_code: '',
    otp: '',
};

const payloadRegistrasi = {
    email: '',
    name: '',
    phone_number: '',
    group_code: '',
};

const responRegistrasi = {
    status: '',
    auth_code: '',
};

const responVerifyOtpRegistrasi = {
    access_token: '',
    refresh_token: '',
};

const payloadVerifyOtpRegistrasi = {
    action: 'VOTPA_REGISTER',
    phone_number: '',
    auth_code: '',
    otp: '',
};

export function ResponVerifyOtpRegistrasiReducer(state = responVerifyOtpRegistrasi, action) {
    switch (action.type) {
        case "RESPON_VERIFY_OTP_REGISTRASI":
            return {
                ...state,
                access_token: action.access_token,
                refresh_token: action.refresh_token,
            };
        case "RESPON_VERIFY_OTP_REGISTRASI_RESET":
            return {
                ...state,
                access_token: '',
                refresh_token: '',
            };
        default:
            return state;
    }
}

export function PayloadVerifyOtpRegistrasiReducer(state = payloadVerifyOtpRegistrasi, action) {
    switch (action.type) {
        case "PAYLOAD_VERIFY_OTP_REGISTRASI":
            return {
                ...state,
                phone_number: action.phone_number,
                auth_code: action.auth_code,
                otp: action?.otp,
            };
        case "PAYLOAD_VERIFY_OTP_REGISTRASI_RESET":
            return {
                ...state,
                phone_number: '',
                auth_code: '',
                otp: ''
            };
        default:
            return state;
    }
}

export function ResponRegistrasiReducer(state = responRegistrasi, action) {
    switch (action.type) {
        case "RESPON_REGISTRASI":
            return {
                ...state,
                status: action?.status,
                auth_code: action?.auth_code,
            };
        case "RESPON_REGISTRASI_RESET":
            return {
                status: '',
                auth_code: '',
            };
        default:
            return state;
    }
}
export function PayloadRegistrasiReducer(state = payloadRegistrasi, action) {
    switch (action.type) {
        case "PAYLOAD_REGISTRASI":
            return {
                ...state,
                email: action?.email,
                name: action?.name,
                phone_number: action?.phone_number,
                group_code: action?.group_code,
            };
        case "PAYLOAD_REGISTRASI_RESET":
            return {
                email: '',
                name: '',
                phone_number: '',
                group_code: '',
            };
        default:
            return state;
    }
}

export function PayloadVerifyOtpLoginReducer(state = payloadVerifyOtpLogin, action) {
    switch (action.type) {
        case "PAYLOAD_VERIFY_OTP_LOGIN":
            return {
                ...state,
                phone_number: action.phone_number,
                auth_code: action.auth_code,
                otp: action?.otp,
            };
        case "PAYLOAD_VERIFY_OTP_LOGIN_RESET":
            return {
                ...state,
                phone_number: '',
                auth_code: '',
                otp: ''
            };
        default:
            return state;
    }
}

export function ResponVerifyOtpLoginReducer(state = responVerifyOtpLogin, action) {
    switch (action.type) {
        case "RESPON_VERIFY_OTP_LOGIN":
            return {
                ...state,
                access_token: action.accessToken,
                isAuthenticated: true,
            };
        case "RESPON_VERIFY_OTP_LOGIN_RESET":
            return {
                ...state,
                access_token: '',
                refresh_token: '',
            };
        default:
            return state;
    }
}

export function PayloadLoginReducer(state = payloadLogin, action) {
    switch (action.type) {
        case "PAYLOAD_LOGIN":
            return {
                ...state,
                phone_number: action.phone_number,
                remember_me: action.remember_me,
            };
        case "PAYLOAD_LOGIN_RESET":
            return {
                ...state,
                phone_number: '',
                remember_me: '',
            };
        default:
            return state;
    }
}

export function ResponLoginReducer(state = responLogin, action) {
    switch (action.type) {
        case "RESPON_LOGIN":
            return {
                ...state,
                status: action.status,
                auth_code: action.payload,
            };
        case "RESPON_LOGIN_RESET":
            return {
                ...state,
                status: '',
                auth_code: '',
            };
        default:
            return state;
    }
}

export default {
    ResponLoginReducer,
    PayloadLoginReducer,
    ResponVerifyOtpLoginReducer,
    PayloadVerifyOtpLoginReducer,
    ResponRegistrasiReducer,
    PayloadRegistrasiReducer,
    ResponVerifyOtpRegistrasiReducer,
    PayloadVerifyOtpRegistrasiReducer,
}