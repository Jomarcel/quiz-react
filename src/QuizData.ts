import {shuffleArray} from "./utils"

const quizData = [
    {
        category:"3",
        difficulty:"easy",
        question: "What kind of cybersecurity risks can be minimised by using a Vitual Private Network (VPN)",
        correct_answer: "Phishing attacks",
        incorrect_answers: ["De-anonymization by network operators", "Key-logging", "Use of insecure Wi-Fi networks"]
    },
    {
        category:"1",
        difficulty:"easy",
        question: "What does the “https://” at the beginning of a URL denote, as opposed to http://(without the “s”)?",
        correct_answer: "That information entered into the site is encrypted",
        incorrect_answers: ["That the site has special high definition", "That the site is not accessible to certain computers", "That the site is the newest version available"]
    },
    {
        category:"1",
        difficulty:"easy",
        question: "Which of the following is an example of a “phishing” attack?",
        correct_answer: "All of the above",
        incorrect_answers: ["Sending someone a text message that contains a malicious link that is disguised to look like a notification that the person has won a contest", "Creating a fake website that looks nearly identical to a real website in order to trick users into entering their login information", "Not sure"]
    },
    {
        category:"3",
        difficulty:"easy",
        question: "Your computer has just been infected with Ransomware and the hacker is demanding £1,000 before releasing it.  What do you do?",
        correct_answer: "Phishing attacks",
        incorrect_answers: ["Disconnect your computer from the network.", "Pay the ransom. You need your files back!", "Send an email to the IT guy in the office."]
    },
    {
        category:"3",
        difficulty:"easy",
        question: "Great news!  Your computer is now clear of Ransomware and you're ready to start working again.  What will you do first?",
        correct_answer: "Backup the data as soon as you can.",
        incorrect_answers: ["Continue working as normal", "Reinstall the USB stick, as you still don't know who it belongs to.", "Nothing, it's been dealt with."]

    },

]
const shuffledData = shuffleArray(quizData)


export default shuffledData