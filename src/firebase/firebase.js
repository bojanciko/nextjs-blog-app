// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, collection, query, Firestore, getDocs, limit } from 'firebase/firestore'
import { ref, uploadBytes, getStorage, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'
import slugify from 'slugify'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTj5vNThk3GDMYYW_tOMHJGUhWbCL9aA4",
  authDomain: "pure-react-blog-app.firebaseapp.com",
  projectId: "pure-react-blog-app",
  storageBucket: "pure-react-blog-app.appspot.com",
  messagingSenderId: "1027620962983",
  appId: "1:1027620962983:web:a08b7cfaf87137d3e91182",
  measurementId: "G-ZBER1HDJE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()
const storage = getStorage()

export const submitPostToFirebase = async (post) => {
  const collectionRef = collection(db, 'posts')
  const newDoc = doc(db, 'posts', post.name)

  try {
    await setDoc(newDoc, {
      slug: post.slug,
      content: post.contetnt,
      createdAt: new Date().now()
    })
  } catch (err) {
    console.log(err)
  }
}

export const getPostFromFirestore = async (doc) => {
  const postDocRef = doc(db, 'posts', doc)
  const valsFromDoc = await getDoc(postDocRef)
  return valsFromDoc
}

const imageFolderRef = ref(storage, 'postImages/')

export const createRefForImage = async (image, postTitle) => {
  // const imageRef = storage.child(image.name + '-' + postTitle)
  const imageRef = ref(storage, `postImages/${image.name}-${postTitle}`)
  const imageSnapshot = await uploadBytes(imageRef, image)
  const downloadUrl = getDownloadURL(imageRef)
  
  
  
  // const downloadUrl = await imageRef.getDownloadURL()
  return downloadUrl
}

export const FetchMdPost = async (mdDoc) => {
  try {

    const postRef = doc(db, 'mdPosts', mdDoc)
    
    const docSnap = await getDoc(postRef)

    if(docSnap.exists()) {
      const data = docSnap.data()
      return data
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.log('Error getting document:', error);
  }
}

export const createMdPost = async (mdPost) => {
  const collectionRef = collection(db, 'mdPosts')
  const idName = slugify(mdPost.name, { lower: true })
  const route = idName + '-' + v4()
  const newDoc = doc(db, 'mdPosts', route)

  try {
    setDoc(newDoc, {
      createdAt: Date.now(),
      slug: route,
      content: mdPost.data,
      title: mdPost.name,
      excerpt: mdPost.excerpt,
      thumbnail: mdPost.thumbnail
    })
  } catch (err) {
    console.log(err)
  }

}

export const getAllPosts = async () => {
  const collectionRef = collection(db, 'mdPosts');
  const q = query(collectionRef)
  const querySnapshot = await getDocs(q)
  
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data())
}

export const getHeroPosts = async () => {
  const collectionRef = collection(db, 'mdPosts');
  const q = query(collectionRef, limit(6))
  const querySnapshot = await getDocs(q)
  
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data())
}



// uploadBytes(imageFolderRef, image).then((snapshot) => getDownloadURL())