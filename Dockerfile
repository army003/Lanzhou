FROM gitlab.globerce.com:5050/non-resident/landing-non-resident/base:59026-1d6632b6 as builder

COPY . ./

RUN yarn build --mode development

# RUN npx sentry-cli releases propose-version
# RUN npx sentry-cli releases files "$SENTRY_RELEASE" upload-sourcemaps ./dist --rewrite

FROM nginx:1.21.6

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .
COPY --from=builder /app/nginx.conf.template /etc/nginx/templates/default.conf.template

CMD ["nginx", "-g", "daemon off;"]
