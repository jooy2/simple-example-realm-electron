const Realm = require('realm');

class DB {
  static async open() {
    try {
      const realmApp = await new Realm({
        schema: [],
        path: '/home/test/Desktop/db.realm',
        schemaVersion: 1
      })

      console.log(realmApp)
    } catch (e) {
      console.error(e)
    }
  }
}

module.exports = DB;