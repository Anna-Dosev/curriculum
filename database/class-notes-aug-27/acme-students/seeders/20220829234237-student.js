'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Students', [
      {
        firstName: 'Christopher',
        lastName:	'Bond',
        city_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Robert',
        lastName:	'Grimes',
        city_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Kelly',
        lastName:	'Petersen',
        city_id: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Joseph',
        lastName:	'Caldwell',
        city_id: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Frank',
        lastName:	'Williams',
        city_id: 103,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Carrie',
        lastName:	'Simpson',
        city_id: 134,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'April',
        lastName:	'Weeks',
        city_id: 56,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Ronald',
        lastName:	'Davis',
        city_id: 99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Corey',
        lastName:	'Rivera',
        city_id: 165,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Felicia',
        lastName:	'White',
        city_id: 144,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Robert',
        lastName:	'Casey',
        city_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Adam',
        lastName:	'Scott',
        city_id: 39,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Darrell',
        lastName:	'Moore',
        city_id: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Joseph',
        lastName:	'Kelly',
        city_id: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jordan',
        lastName:	'Carlson',
        city_id: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Tammy',
        lastName:	'Jones',
        city_id: 54,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'James',
        lastName:	'Moore',
        city_id: 39,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Thomas',
        lastName:	'Malone',
        city_id: 77,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Pamela',
        lastName:	'Russell',
        city_id: 169,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Craig',
        lastName:	'Mckenzie',
        city_id: 69,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
