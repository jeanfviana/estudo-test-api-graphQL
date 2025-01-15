// test.js
const { spec } = require('pactum');
const { eachLike, like } = require('pactum-matchers');

it('listagem de usuários', async () => {
  await spec()
    .post('http://lojaebac.ebaconline.art.br/graphql')
    .withGraphQLQuery(`
    query {
        Users {
          id
          email
          profile {
            firstName
          }
        }
    }
  `)
    .expectStatus(200)
    .expectJsonMatch({
      data: {
        Users: eachLike({
          id: like("6786f13052f9b1cffcfcd15a"),
          email: like("alisa.pagac62@gmail.com"),
          profile: {
            firstName: like("Elian")
          }
        })
      }
    })
});


