const jwt = require("jsonwebtoken");

function jwtGenerator(user_id) {
    const payload = {
        user: {
            id: user_id
        }
    };
    return jwt.sign(payload, "+r?FRAD97Vw3Pq", { expiresIn: "1hr" });
}

module.exports = jwtGenerator;