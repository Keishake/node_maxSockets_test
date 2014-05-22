Node.js maxSockets Test
====================

Node.jsでhttp requestをするときのmaxSocketが上限を超えたらどうなるか試してみた

see http://nodejs.org/docs/v0.10.24/api/http.html#http_agent_maxsockets

### install

    npm install
    
で必要なパッケージをインストールして

    node host.js
    node cliend.js

とそれぞれ起動。

    http://localhost:3002

にタブ２つくらいひらいてアクセスすると、最初にアクセスしたやつが5秒後にレスポンス来て、その5秒後に後でアクセスしたやつのレスポンスが返ってきた。
