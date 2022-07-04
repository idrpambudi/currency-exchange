# Currency Rate API
Hourly updated currency rate application, cached from https://fixer.io/ 3rd party API.

## Getting Started
1. Run `npm run dev` in root directory to start the application.
2. REST Open API Docs accessible through `http://localhost:4000/rest`.
3. The GraphQL Playground accessible through `http://localhost:4000/graphql`.

## Configurations
- Binded port can be changed through `PORT` environment variable
- Redis server can be changed through `REDIS_URL` environment variable. Default to `redis://default:HiyzEfKXqSkNjSM1ajtc@containers-us-west-53.railway.app:7332` hosted by Railway free account. 

## Parts that can be improved
- Test is incomplete and cannot be run. The `ts-jest` module is keep failing on installation.
- Fetch frequency to oracle can be reduced significantly to once for each hour by graph theory. For example fetch result from USD -> all can be used for determining SGD -> HKD currency rate (by SGD -> USD -> HKD).
