import Realm from 'realm';

const FaveSchema = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date',
  }
};
const realm = new Realm({schema: [FaveSchema]});

export const queryFave = () => {
  return realm.objects('Fave')
}

export const deleteFave = (FaveID) => {
  let deleteFave = realm.objects('Fave').filtered('id == $0', FaveID)
  try {
    realm.write(() => {
      realm.delete(deleteFave);
    })
  } catch (e) {
    console.log(e)
  }
}

export const addFave = (session_id) => {
  try {
    realm.write(() => {
      realm.create('Fave', {id: session_id, faved_on: new Date()})
    })
  } catch (e) {
    console.log(e)
  }
}

export default realm;