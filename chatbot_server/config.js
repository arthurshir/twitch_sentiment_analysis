var config = {
    ibm_tone_analyzer: {
        url: "https://gateway.watsonplatform.net/tone-analyzer/api",
        use_unauthenticated: false,
        username: "4753e610-d3a2-4e22-8514-755f1185ae14",
        password: "eMcTbkAQN8sQ"
    },
    twitch: {
        options: {
            debug: true
        },
        connection: {
            cluster: "aws",
            reconnect: true
        },
        identity: {
            username: "Fantaandcrackers",
            password: "oauth:a0ah51hhza2rffjkyia0i9zc3n9cdv"
        },
        channels: ["fantaandcrackers"]
    },
    chatbot_analytics_server_url: 'http://localhost:7555'
};

module.exports = config;