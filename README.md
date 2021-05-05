# MINI-Merchant <g-emoji class="g-emoji" alias="shopping" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f6cd.png">🛍️</g-emoji>
> A mini ecommerce using the MELI API

I made a FrontEnd and a BackEnd that interacts with an external API.

## Back-End <g-emoji class="g-emoji" alias="back" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f519.png">🔙</g-emoji>

- The following Mercado Libre endpoint was used `https://api.mercadolibre.com/sites/MLA/search?q={query}`.
- Made a cache so i don't have to repeat calls

> We can see the complete documentation of the endpoint in [this link](https://api.mercadolibre.com/sites/MLA/search?q=iphone).

### Endpoints <g-emoji class="g-emoji" alias="pushpin" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4cc.png">📌</g-emoji>
#### Swagger:
> url: `http://localhost:3001/doc/`

![alt text](swaggerEndpoints.PNG)

#### /api/search

![alt text](postman.PNG)

## Front-End <g-emoji class="g-emoji" alias="soon" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f51c.png">🔜</g-emoji>
> url: `http://localhost:3000/`

- Trigger a request to the API(BackEnd) through a **controlled** form.
- Lets you search for product.
- Shows a catalog of the searched product with their respective attributes.
- Allows you to filter by higher price, lower, price, new and used.
- Allows you to clean the search filtering.
- Has pagination.

![Alt Text](minimerchant.gif)

### Programming Language <g-emoji class="g-emoji" alias="tongue" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f445.png">👅</g-emoji>
- JavaScript
### Technologies <g-emoji class="g-emoji" alias="toolbox" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f9f0.png">🧰</g-emoji>
#### BackEnd:
- NodeJS
- Express
- Swagger
#### FrontEnd:
- React
- React-Router
- Redux
- Bootstrap
- Material-ui
- Fontawesome

# Instructions <g-emoji class="g-emoji" alias="clipboard" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4cb.png">📋</g-emoji>
- npm install (in api and client folder)
- npm run swagger-autogen in api and npm start in client folder
- check their respective urls