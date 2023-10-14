/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
 },

    env: {
        DB_URL:"mongodb+srv://image:<password>@cluster6.or0rlqh.mongodb.net/Image",
    }
}
module.exports = nextConfig
