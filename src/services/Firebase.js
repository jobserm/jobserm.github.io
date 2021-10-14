// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from 'firebase/storage'
require('dotenv').config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
if (!getApps().length) {
    initializeApp(
        {
            apiKey: "AIzaSyDJjtL7fL3MY-yHztGvg4bgfXN6B-9AqpI",
            projectId: "jobserm-webtech",
            storageBucket: "jobserm-webtech.appspot.com",
        }
    )
}

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(getApp());

// Create a storage reference from our storage service
const storageRef = ref(storage);

// Points to 'images'
const imagesRef = ref(storageRef, 'images');

export default {
    async uploadFile(file, dest) {
        const destination = dest
        await uploadBytes(ref(storage, destination), file)
        console.log("upload successfully")
    }
}