export default function({$api}){


function register(userData) {
    return new Promise((resolve, reject) => {
        $api.$post('/user/12345', {
            name: 'new name'
          })
    });
};

function login(phone_number) {
    return new Promise((resolve, reject) => {
        $api.$post('user-profile/send-code/', {
            phone_number
          })
    });
};

function verify(phone_number, code) {
    return new Promise((resolve, reject) => {
    });
};

}