import Realm from 'realm';

const FaveSchema = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date',
  }
};

export const queryFave = () => {
  return Realm.objects('Fave')
}

export const deleteFave = (Fave) => {
  let deleteFave = Realm.objects('Fave').filtered('id == $0', Fave)

  try {
    Realm.write(() => {
      Realm.delete(deleteFave);
    })
  } catch (e) {
    console.log(e)
  }

}

export const addFave = (session_id) => {
  try {
    Realm.write(() => {
      Realm.create('Fave', {id: session_id, faved_on: new Date()})
    })
  } catch (e) {
    console.log(e)
  }
}

export default new Realm({schema: [FaveSchema]});