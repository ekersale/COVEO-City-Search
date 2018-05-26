process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app');
const should = chai.should();

chai.use(chaiHttp);

describe('Cities', () => {
  /*
  * Test the /GET Cities route
  */
  describe('/GET /cities/suggestions', () => {
      it('it should respond 200 OK', (done) => {
        chai.request(server)
            .get('/cities/suggestions')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
      });
  });

  describe('/GET /cities/suggestions', () => {
    it('it should get 10 random cities', (done) => {
      chai.request(server)
          .get('/cities/suggestions')
          .end((err, res) => {
              res.body.should.be.a('object');
              res.body.results.length.should.be.eql(10);
              done();
          });
    });
});

describe('/GET /cities/suggestions', () => {
    it('it should have \'name\' property defined', (done) => {
      chai.request(server)
          .get('/cities/suggestions')
          .end((err, res) => {
              res.body.results[0].name.should.exist;
              done();
          });
    });
});

describe('/GET /cities/suggestions', () => {
    it('it should have \'longitude_d\' property defined', (done) => {
        chai.request(server)
            .get('/cities/suggestions')
            .end((err, res) => {
                res.body.results[0].longitude_d.should.exist;
                done();
            });
    });    
});

describe('/GET /cities/suggestions', () => {
    it('it should have \'latitude_d\' property defined', (done) => {
        chai.request(server)
            .get('/cities/suggestions')
            .end((err, res) => {
                res.body.results[0].latitude_d.should.exist;
                done();
            });
    });    
});

describe('/GET /cities/suggestions', () => {
    it('it should have \'score\' property defined', (done) => {
        chai.request(server)
            .get('/cities/suggestions')
            .end((err, res) => {
                res.body.results[0].score.should.exist;
                done();
            });
    });    
});

describe('/GET /cities/suggestions?q=Londo', () => {
    it('it should have at least one result', (done) => {
        chai.request(server)
            .get('/cities/suggestions?q=Londo')
            .end((err, res) => {
                res.body.results.length.should.be.greaterThan(1);
                done();
            });
    });    
});

describe('/GET /cities/suggestions?q=Londo&latitude=43.70011', () => {
    it('it should have at least one result', (done) => {
        chai.request(server)
            .get('/cities/suggestions?q=Londo&latitude=43.70011')
            .end((err, res) => {
                res.body.results.length.should.be.greaterThan(1);
                done();
            });
    });    
});

describe('/GET /cities/suggestions?q=Londo&longitude=-79.4163', () => {
    it('it should have at least one result', (done) => {
        chai.request(server)
            .get('/cities/suggestions?q=Londo&longitude=-79.4163')
            .end((err, res) => {
                res.body.results.length.should.be.greaterThan(1);
                done();
            });
    });    
});

describe('/GET /cities/suggestions?q=Londo&latitude=43.70011&longitude=-79.4163', () => {
    it('it should have at least one result', (done) => {
        chai.request(server)
            .get('/cities/suggestions?q=Londo&latitude=43.70011&longitude=-79.4163')
            .end((err, res) => {
                res.body.results.length.should.be.greaterThan(1);
                done();
            });
    });    
});

describe('/GET /cities/suggestions?latitude=43.70011&longitude=-79.4163', () => {
    it('it should have at least one result', (done) => {
        chai.request(server)
            .get('/cities/suggestions?latitude=43.70011&longitude=-79.4163')
            .end((err, res) => {
                res.body.results.length.should.be.greaterThan(1);
                done();
            });
    });    
});
// and much more tests ...
});