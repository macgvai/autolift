FROM node:22-bookworm-slim AS base

WORKDIR /app

ENV NUXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./

FROM base AS deps

RUN --mount=type=cache,target=/root/.npm npm ci --ignore-scripts --fetch-retries=5 --fetch-retry-factor=2 --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=120000

FROM base AS development

ENV NODE_ENV=development

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run postinstall

EXPOSE 3000 24678

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]

FROM base AS build

ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run postinstall && npm run build

FROM node:22-bookworm-slim AS production

WORKDIR /app

ENV NODE_ENV=production
ENV NUXT_TELEMETRY_DISABLED=1

COPY --from=build /app/.output ./.output
COPY --from=build /app/public ./public

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
