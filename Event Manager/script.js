// Enhanced AI Chatbot Knowledge Base
const knowledgeBase = {
    'academic calendar': {
        response: '📅 **Academic Calendar** contains all important dates for the semester including:\n\n• Semester start and end dates\n• Holiday schedules\n• Exam periods (mid-terms, finals)\n• Registration deadlines\n• Cultural and technical events\n• Result declaration dates\n\nYou can access it by clicking the "Academic Calendar" card on the main dashboard.',
        related: ['timetable', 'exam schedule', 'holidays', 'semester', 'dates', 'calendar'],
        keywords: ['calendar', 'academic', 'dates', 'holidays', 'semester', 'schedule']
    },
    'timetable': {
        response: '⏰ **Time Table** - I Semester B.E 2025-26 (Section: CG, Classroom: 306)\n\n**Weekly Schedule:**\n• **Monday**: Physics Lab (11-1), CAED Lab (2-4), Maths Lab (4-5)\n• **Tuesday**: ESC [IEC] (2-3), Maths (3-4), Kannada (4-5)\n• **Wednesday**: Maths (9-10), Physics (10-11), Programming in C (11-12), Soft Skills (2-3), CAED T (3-5)\n• **Thursday**: ESC [IEC] (9-10), PSC Lab (10-11), Physics (11-12), Maths (12-1), Programming in C (1-2)\n• **Friday**: Physics (2-3), Programming in C (3-4), ESC [IEC] (4-5)\n• **Saturday**: IDT Lab (9-1)\n\n**Subjects:** Applied Maths, Applied Physics, CAED, ESC, Programming in C, Soft Skills, PSC Lab, IDT Lab, Kannada\n\nClick "Time Table" card to view the complete detailed schedule!',
        related: ['academic calendar', 'attendance', 'classes', 'schedule', 'subjects', 'labs'],
        keywords: ['timetable', 'schedule', 'classes', 'timing', 'subjects', 'classroom', 'labs', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    },
    'attendance': {
        response: '📊 **Attendance Tracking** provides:\n\n• Current attendance percentage\n• Subject-wise attendance\n• Detailed attendance records\n• Shortage warnings (if any)\n• Attendance policies\n• Make-up class schedules\n\nMinimum 75% attendance is required. Check regularly to maintain good attendance.',
        related: ['timetable', 'results', 'academic calendar', 'percentage'],
        keywords: ['attendance', 'percentage', 'present', 'absent', 'shortage', 'records']
    },
    'lms': {
        response: '📚 **LMS (Learning Management System)** offers:\n\n• Course materials and lecture notes\n• Assignment submissions\n• Online quizzes and tests\n• Discussion forums\n• Grade book access\n• Announcements from faculty\n• Video lectures and resources\n\nLogin with your student credentials to access all course content.',
        related: ['assignments', 'course materials', 'lms test result', 'online', 'quizzes'],
        keywords: ['lms', 'learning', 'management', 'system', 'assignments', 'materials', 'online']
    },
    'announcement': {
        response: '📢 **Announcements** include:\n\n• Important college updates\n• Department notices\n• Event notifications\n• Policy changes\n• Emergency alerts\n• Academic updates\n\nCheck regularly for the latest information. Announcements are also sent via email and SMS.',
        related: ['notifications', 'circular', 'events', 'updates', 'alerts'],
        keywords: ['announcement', 'notice', 'updates', 'alerts', 'news', 'information']
    },
    'transport': {
        response: '🚌 **Transport Services** provide:\n\n• Bus route information\n• Pickup and drop timings\n• Route maps and stops\n• Bus pass applications\n• Transport fees and payments\n• Emergency contact numbers\n• Route changes and updates\n\nContact transport office for route-specific queries.',
        related: ['bus routes', 'transportation', 'college bus', 'commute'],
        keywords: ['transport', 'bus', 'routes', 'commute', 'travel', 'pickup', 'drop']
    },
    'internal assessment': {
        response: '📝 **Internal Assessment** includes:\n\n• Test marks and grades\n• Assignment scores\n• Project evaluations\n• Lab assessments\n• Class participation\n• Weightage distribution\n• Grade calculation methods\n\nThese contribute 40% to your final grade. Check regularly for updates.',
        related: ['results', 'exam schedule', 'grades', 'tests', 'assignments'],
        keywords: ['internal', 'assessment', 'tests', 'assignments', 'marks', 'grades']
    },
    'exam schedule': {
        response: '📋 **Exam Schedule** displays:\n\n• Exam dates and timings\n• Subject-wise schedule\n• Venue information\n• Seat numbers\n• Important instructions\n• Hall ticket download\n• Result dates\n\nIncludes mid-terms, finals, and supplementary exams. Download hall tickets in advance.',
        related: ['academic calendar', 'results', 'internal assessment', 'exams'],
        keywords: ['exam', 'schedule', 'dates', 'timings', 'venue', 'hall ticket']
    },
    'results': {
        response: '📈 **Results** section shows:\n\n• Subject-wise grades\n• Overall GPA/CGPA\n• Detailed mark sheets\n• Grade cards\n• Result analysis\n• Revaluation information\n• Transcript requests\n\nResults are usually declared within 15 days of exams. Check for any discrepancies.',
        related: ['internal assessment', 'exam schedule', 'grades', 'gpa'],
        keywords: ['results', 'grades', 'marks', 'gpa', 'cgpa', 'mark sheet', 'transcript']
    },
    'fees': {
        response: '💰 **Fees Management** includes:\n\n• Tuition fee details\n• Payment schedules\n• Due dates and late fees\n• Payment history\n• Online payment options\n• Fee structure breakdown\n• Scholarship information\n• Refund policies\n\nPay fees before due dates to avoid late charges.',
        related: ['payment', 'tuition', 'financial', 'scholarship'],
        keywords: ['fees', 'payment', 'tuition', 'financial', 'money', 'scholarship']
    },
    'feedback': {
        response: '💬 **Feedback System** allows you to:\n\n• Rate faculty performance\n• Provide course feedback\n• Report infrastructure issues\n• Suggest improvements\n• Submit complaints\n• Give suggestions\n• Anonymous feedback option\n\nYour feedback helps improve college services and teaching quality.',
        related: ['suggestions', 'complaints', 'improvement', 'rating'],
        keywords: ['feedback', 'suggestions', 'complaints', 'rating', 'improvement']
    },
    'notifications': {
        response: '🔔 **Notifications** keep you updated with:\n\n• Important alerts\n• Deadline reminders\n• Event notifications\n• System updates\n• Personal messages\n• Emergency alerts\n• Academic updates\n\nEnable push notifications for instant updates on your mobile device.',
        related: ['announcement', 'alerts', 'updates', 'reminders'],
        keywords: ['notifications', 'alerts', 'reminders', 'updates', 'messages']
    },
    'circular': {
        response: '📄 **Circulars** contain:\n\n• Official college notices\n• Policy updates\n• Administrative information\n• Rule changes\n• Important guidelines\n• Contact information\n• Official communications\n\nRead all circulars carefully as they contain important information.',
        related: ['announcement', 'notifications', 'official notices', 'policies'],
        keywords: ['circular', 'official', 'notices', 'policies', 'rules', 'guidelines']
    },
    'lms test result': {
        response: '📊 **LMS Test Results** show:\n\n• Online quiz scores\n• Test performance\n• Time taken for tests\n• Correct/incorrect answers\n• Detailed analysis\n• Retake options (if available)\n• Grade calculations\n\nThese tests contribute to your internal assessment marks.',
        related: ['lms', 'internal assessment', 'online tests', 'quizzes'],
        keywords: ['lms test', 'online test', 'quiz', 'test result', 'lms result']
    },
    'events': {
        response: '🎉 **Events** section displays:\n\n• Upcoming college events\n• Cultural programs\n• Technical symposiums\n• Workshops and seminars\n• Sports events\n• Festivals and celebrations\n• Guest lectures\n• Career fairs\n\nClick on "Events" to see detailed information about each event including dates, venues, and registration details.',
        related: ['cultural fest', 'technical symposium', 'college activities', 'workshops'],
        keywords: ['events', 'cultural', 'technical', 'symposium', 'workshops', 'festivals']
    },
    'ai assistant': {
        response: '🤖 **AI Assistant** - I\'m here to help you with:\n\n• Information about all portal features\n• Academic queries\n• Event details\n• General assistance\n• Navigation help\n• FAQ answers\n\nJust ask me anything about the DSI student portal! I can help with Academic Calendar, Time Table, Attendance, Results, Events, LMS, and much more.',
        related: ['help', 'information', 'support', 'assistance'],
        keywords: ['ai', 'assistant', 'help', 'support', 'chatbot']
    }
};

// Enhanced conversation patterns
const conversationPatterns = {
    greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'],
    thanks: ['thank', 'thanks', 'appreciate', 'grateful', 'thx'],
    goodbye: ['bye', 'goodbye', 'see you', 'farewell', 'take care', 'later'],
    help: ['help', 'what can you do', 'how can you help', 'assist', 'support', 'guide'],
    features: ['features', 'options', 'menu', 'what\'s available', 'services', 'functions'],
    contact: ['contact', 'phone', 'email', 'address', 'office', 'staff', 'reach'],
    problems: ['problem', 'issue', 'error', 'not working', 'trouble', 'difficulty', 'bug'],
    urgent: ['urgent', 'emergency', 'asap', 'immediately', 'quickly', 'fast', 'priority'],
    timetable: ['schedule', 'timetable', 'classes', 'when', 'time', 'period', 'slot', 'day'],
    subjects: ['subject', 'course', 'class', 'lecture', 'lab', 'practical', 'theory'],
    attendance: ['attendance', 'present', 'absent', 'percentage', 'marking', 'roll call'],
    exams: ['exam', 'test', 'assessment', 'midterm', 'final', 'quiz', 'evaluation'],
    results: ['result', 'grade', 'mark', 'score', 'gpa', 'cgpa', 'performance'],
    events: ['event', 'function', 'program', 'festival', 'celebration', 'activity'],
    fees: ['fee', 'payment', 'money', 'cost', 'tuition', 'financial', 'billing']
};

// Timetable-specific data for better responses
const timetableData = {
    days: {
        monday: {
            classes: [
                { time: '11:00-12:00', subject: 'PHY. LAB', location: 'PhysicsDept, Building No. 19' },
                { time: '12:00-1:00', subject: 'PHY. LAB', location: 'PhysicsDept, Building No. 19' },
                { time: '2:00-3:00', subject: 'CAED Laboratory', location: 'IV Floor, Building No. 13' },
                { time: '3:00-4:00', subject: 'CAED Laboratory', location: 'IV Floor, Building No. 13' },
                { time: '4:00-5:00', subject: 'MATHS LAB', location: 'Maths Department' }
            ]
        },
        tuesday: {
            classes: [
                { time: '2:00-3:00', subject: 'ESC [IEC]', location: 'IEC' },
                { time: '3:00-4:00', subject: 'MATHS', location: 'Classroom' },
                { time: '4:00-5:00', subject: 'KANNADA', location: 'Classroom' }
            ]
        },
        wednesday: {
            classes: [
                { time: '9:00-10:00', subject: 'MATHS', location: 'Classroom' },
                { time: '10:00-11:00', subject: 'PHYSICS', location: 'Classroom' },
                { time: '11:00-12:00', subject: 'PROGRAMMING IN C', location: 'Classroom' },
                { time: '2:00-3:00', subject: 'SOFT SKILL', location: 'Classroom' },
                { time: '3:00-4:00', subject: 'CAED T', location: 'Classroom' },
                { time: '4:00-5:00', subject: 'CAED T', location: 'Classroom' }
            ]
        },
        thursday: {
            classes: [
                { time: '9:00-10:00', subject: 'ESC [IEC]', location: 'IEC' },
                { time: '10:00-11:00', subject: 'PSC LAB', location: 'Computer Science Dept. Building No 19' },
                { time: '11:00-12:00', subject: 'PHYSICS', location: 'Classroom' },
                { time: '12:00-1:00', subject: 'MATHS', location: 'Classroom' },
                { time: '1:00-2:00', subject: 'PROGRAMMING IN C', location: 'Classroom' }
            ]
        },
        friday: {
            classes: [
                { time: '2:00-3:00', subject: 'PHYSICS', location: 'Classroom' },
                { time: '3:00-4:00', subject: 'PROGRAMMING IN C', location: 'Classroom' },
                { time: '4:00-5:00', subject: 'ESC [IEC]', location: 'IEC' }
            ]
        },
        saturday: {
            classes: [
                { time: '9:00-10:00', subject: 'IDT LAB', location: 'IDT LAB' },
                { time: '10:00-11:00', subject: 'IDT LAB', location: 'IDT LAB' },
                { time: '11:00-12:00', subject: 'IDT LAB', location: 'IDT LAB' },
                { time: '12:00-1:00', subject: 'IDT LAB', location: 'IDT LAB' }
            ]
        }
    },
    subjects: {
        'applied mathematics': { code: '1BMATS101', credits: 4, instructor: 'Dr. Amruthalakshmi M. R', dept: 'MATHS' },
        'applied physics': { code: '1BPHYS102', credits: 4, instructor: 'Dr. Digvijay N Singh', dept: 'PHYSICS' },
        'caed': { code: '1BCEDS103', credits: 3, instructor: 'Prof. Madhavamurthy, Prof. Govindaraju', dept: 'ME' },
        'esc': { code: '1BESC104C', credits: 3, instructor: 'Dr. Naveen K N', dept: 'EC' },
        'programming in c': { code: '1BEIT105', credits: 3, instructor: 'CS Department', dept: 'CS' },
        'soft skills': { code: '1BSKS106', credits: 'PP', instructor: 'Prof. Meena Jagdesh', dept: 'HUMANITIES' },
        'psc lab': { code: '1BPOPL107', credits: 1, instructor: 'CS Department', dept: 'CS' },
        'idt lab': { code: '1BIDTL158', credits: 1, instructor: 'CG Department', dept: 'CG' },
        'kannada': { code: '1BKSK109/1BKBK109', credits: 1, instructor: 'Prof. Kavita/Dr. Jayanth M', dept: 'HUMANITIES' }
    }
};

// Feature opening function
function openFeature(feature) {
    if (feature === 'events') {
        document.getElementById('eventsModal').style.display = 'block';
    } else if (feature === 'ai-chatbot') {
        document.getElementById('aiChatbotModal').style.display = 'block';
    } else if (feature === 'timetable') {
        document.getElementById('timetableModal').style.display = 'block';
    } else {
        // For other features, show a placeholder message
        alert(`Opening ${feature.replace('-', ' ').toUpperCase()}...\n\nThis feature would normally open the corresponding section of the student portal.`);
    }
}

// Modal closing function
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Chatbot functionality
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Add user message to chat
    addMessage(message, 'user');
    input.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Process message and get response
    const response = getBotResponse(message);
    
    // Add bot response to chat with delay
    setTimeout(() => {
        hideTypingIndicator();
        addMessage(response, 'bot');
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

// Show typing indicator
function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = '<span class="typing-dots">🤖 AI is typing<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span></span>';
    
    typingDiv.appendChild(contentDiv);
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Hide typing indicator
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Handle Enter key press in chat input
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Add message to chat with enhanced formatting
function addMessage(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    // Format the message with proper line breaks and styling
    const formattedMessage = formatMessage(message);
    contentDiv.innerHTML = formattedMessage;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Format message with proper HTML rendering
function formatMessage(message) {
    return message
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
        .replace(/\n\n/g, '</p><p>') // Paragraph breaks
        .replace(/\n• /g, '<br>• ') // List items
        .replace(/\n- /g, '<br>- ') // List items
        .replace(/^/, '<p>') // Start paragraph
        .replace(/$/, '</p>') // End paragraph
        .replace(/<p><\/p>/g, '') // Remove empty paragraphs
        .replace(/<p>(.*?)<br>/g, '<p>$1<br>') // Fix paragraph breaks
        .replace(/<p>(.*?)<\/p>/g, '$1'); // Remove unnecessary paragraph tags
}

// Advanced AI response function with sophisticated NLP
function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();
    
    // Handle greetings with context awareness
    if (conversationPatterns.greetings.some(greeting => message.includes(greeting))) {
        const timeOfDay = new Date().getHours();
        let greeting = 'Hello';
        if (timeOfDay < 12) greeting = 'Good morning';
        else if (timeOfDay < 17) greeting = 'Good afternoon';
        else greeting = 'Good evening';
        
        return `👋 ${greeting}! Welcome to the DSI Student Portal. I'm your AI assistant and I'm here to help you with any questions about the portal features, timetable, subjects, and more. What would you like to know?`;
    }
    
    // Handle thanks with encouragement
    if (conversationPatterns.thanks.some(thanks => message.includes(thanks))) {
        return '😊 You\'re very welcome! I\'m glad I could help. Feel free to ask me anything else about the DSI portal - I\'m here to assist you with timetable, subjects, attendance, results, and all other portal features!';
    }
    
    // Handle goodbye with helpful reminders
    if (conversationPatterns.goodbye.some(goodbye => message.includes(goodbye))) {
        return '👋 Goodbye! Have a wonderful day and don\'t hesitate to come back if you need any assistance with the portal. Remember to check your timetable regularly and keep track of your attendance!';
    }
    
    // Handle help requests with comprehensive information
    if (conversationPatterns.help.some(help => message.includes(help))) {
        return '🤖 I can help you with information about:\n\n• **Time Table** - Your complete class schedule with timings and locations\n• **Subjects** - Details about all your courses, instructors, and credits\n• **Academic Calendar** - Important dates and holidays\n• **Attendance** - Track your attendance percentage\n• **Results** - View grades and mark sheets\n• **Events** - Upcoming college events\n• **LMS** - Learning materials and assignments\n• **Fees** - Payment information and schedules\n• **Transport** - Bus routes and timings\n• **Notifications** - Important alerts and updates\n\nJust ask me about any specific feature or ask questions like "What\'s my schedule for Monday?" or "Tell me about my subjects"!';
    }
    
    // Handle timetable-specific questions with detailed responses
    if (conversationPatterns.timetable.some(timetable => message.includes(timetable))) {
        return handleTimetableQuestions(message);
    }
    
    // Handle subject-specific questions
    if (conversationPatterns.subjects.some(subject => message.includes(subject))) {
        return handleSubjectQuestions(message);
    }
    
    // Handle feature requests with enhanced information
    if (conversationPatterns.features.some(feature => message.includes(feature))) {
        return '📱 The DSI Student Portal offers these main features:\n\n🎓 **Academic**: Calendar, Time Table, Attendance, Results, Exam Schedule\n📚 **Learning**: LMS, Internal Assessment, Test Results\n💰 **Administrative**: Fees, Notifications, Circulars\n🚌 **Services**: Transport, Feedback\n🎉 **Events**: Cultural programs, Technical symposiums\n🤖 **AI Assistant**: That\'s me! I can help with all of the above.\n\nWhich feature would you like to know more about?';
    }
    
    // Handle contact requests with comprehensive details
    if (conversationPatterns.contact.some(contact => message.includes(contact))) {
        return '📞 **Contact Information**:\n\n• **Main Office**: +91-80-42161750\n• **Email**: info@dsce.edu.in\n• **Address**: Dayananda Sagar College of Engineering, Shavige Malleshwara Hills, Kumaraswamy Layout, Bangalore\n• **Transport Office**: +91-80-42161751\n• **Examination Office**: +91-80-42161752\n• **IT Support**: itsupport@dsce.edu.in\n\nFor specific queries, you can also visit the respective department offices.';
    }
    
    // Handle problem reports with step-by-step solutions
    if (conversationPatterns.problems.some(problem => message.includes(problem))) {
        return '🔧 **Technical Support**:\n\nIf you\'re experiencing issues with the portal:\n\n• Try refreshing the page\n• Clear your browser cache\n• Check your internet connection\n• Contact IT support: itsupport@dsce.edu.in\n• Visit the computer center for assistance\n\nFor urgent issues, call +91-80-42161753';
    }
    
    // Handle urgent requests with priority information
    if (conversationPatterns.urgent.some(urgent => message.includes(urgent))) {
        return '⚡ **Urgent Assistance**:\n\nFor urgent matters:\n\n• **Emergency**: Contact security at +91-80-42161754\n• **Academic Emergency**: Visit the academic office immediately\n• **Technical Issues**: Call IT support at +91-80-42161753\n• **Transport Issues**: Contact transport office at +91-80-42161751\n\nWhat specific urgent matter can I help you with?';
    }
    
    // Enhanced keyword matching with scoring and context
    let bestMatch = null;
    let bestScore = 0;
    
    for (const [key, data] of Object.entries(knowledgeBase)) {
        let score = 0;
        
        // Check for exact keyword matches
        if (data.keywords) {
            score += data.keywords.filter(keyword => message.includes(keyword)).length * 3;
        }
        
        // Check for related terms
        if (data.related) {
            score += data.related.filter(term => message.includes(term)).length * 2;
        }
        
        // Check for partial matches
        if (message.includes(key)) {
            score += 5;
        }
        
        if (score > bestScore) {
            bestScore = score;
            bestMatch = data;
        }
    }
    
    // Return best match if score is high enough
    if (bestMatch && bestScore >= 2) {
        return bestMatch.response;
    }
    
    // Handle specific question patterns with better context
    if (message.includes('what is') || message.includes('what are')) {
        return 'I\'d be happy to explain! Could you be more specific about what you\'d like to know? For example:\n\n• "What is my timetable for Monday?"\n• "What are my subjects this semester?"\n• "What is the academic calendar?"\n• "What are the upcoming events?"\n• "What is LMS?"\n\nI can provide detailed information about any portal feature!';
    }
    
    if (message.includes('how to') || message.includes('how do i')) {
        return 'I can guide you through various processes! Please specify what you\'d like to do, such as:\n\n• "How to check my timetable?"\n• "How to check attendance?"\n• "How to pay fees?"\n• "How to access LMS?"\n• "How to view results?"\n\nI\'ll provide step-by-step instructions!';
    }
    
    if (message.includes('when') || message.includes('time')) {
        return 'For timing-related queries, I can help with:\n\n• **Class timings** - "What time is my Maths class?"\n• **Exam schedules** - "When are the mid-term exams?"\n• **Event dates** - "When is the cultural fest?"\n• **Fee deadlines** - "When should I pay my fees?"\n• **Result dates** - "When will results be declared?"\n\nWhat specific timing information do you need?';
    }
    
    if (message.includes('where') || message.includes('location')) {
        return 'I can help you find locations for:\n\n• **Classroom locations** - "Where is my Physics lab?"\n• **Exam venues** - "Where is my exam hall?"\n• **Event venues** - "Where is the cultural fest?"\n• **Office locations** - "Where is the academic office?"\n• **Transport pickup points** - "Where can I catch the bus?"\n\nWhat location are you looking for?';
    }
    
    // Handle multi-word queries better with context
    const words = message.split(' ');
    for (const word of words) {
        for (const [key, data] of Object.entries(knowledgeBase)) {
            if (data.keywords && data.keywords.includes(word)) {
                return data.response;
            }
        }
    }
    
    // Smart suggestions based on common queries
    if (message.length < 3) {
        return 'Please ask me a more specific question! I can help with information about your timetable, subjects, attendance, results, events, LMS, fees, and much more.';
    }
    
    // Default response with enhanced suggestions
    return `🤔 I understand you're asking about "${userMessage}". I can help you with information about:\n\n• **Time Table** - Your complete class schedule\n• **Subjects** - Course details and instructors\n• **Academic Calendar** - Important dates and holidays\n• **Attendance** - Track your attendance\n• **Results** - View your grades\n• **Events** - Upcoming college events\n• **LMS** - Learning materials\n• **Fees** - Payment information\n• **Transport** - Bus routes\n\nCould you be more specific? Try asking "What's my schedule for Monday?" or "Tell me about my subjects"!`;
}

// Handle timetable-specific questions
function handleTimetableQuestions(message) {
    // Check for specific day queries
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const dayMatch = days.find(day => message.includes(day));
    
    if (dayMatch && dayMatch !== 'sunday') {
        const dayData = timetableData.days[dayMatch];
        let response = `📅 **Your schedule for ${dayMatch.charAt(0).toUpperCase() + dayMatch.slice(1)}:**\n\n`;
        
        if (dayData.classes.length === 0) {
            response += 'No classes scheduled for this day.';
        } else {
            dayData.classes.forEach(cls => {
                response += `• **${cls.time}** - ${cls.subject}\n  📍 ${cls.location}\n\n`;
            });
        }
        
        response += 'Click the "Time Table" card to view the complete weekly schedule!';
        return response;
    }
    
    // Check for specific time queries
    if (message.includes('morning') || message.includes('9') || message.includes('10') || message.includes('11')) {
        return '🌅 **Morning Classes (9:00 AM - 12:00 PM):**\n\n• **Wednesday**: Maths (9-10), Physics (10-11), Programming in C (11-12)\n• **Thursday**: ESC [IEC] (9-10), PSC Lab (10-11), Physics (11-12), Maths (12-1)\n• **Saturday**: IDT Lab (9-1)\n\nClick "Time Table" to see the complete schedule!';
    }
    
    if (message.includes('afternoon') || message.includes('2') || message.includes('3') || message.includes('4') || message.includes('5')) {
        return '🌞 **Afternoon Classes (2:00 PM - 5:00 PM):**\n\n• **Monday**: CAED Lab (2-4), Maths Lab (4-5)\n• **Tuesday**: ESC [IEC] (2-3), Maths (3-4), Kannada (4-5)\n• **Wednesday**: Soft Skills (2-3), CAED T (3-5)\n• **Thursday**: Programming in C (1-2)\n• **Friday**: Physics (2-3), Programming in C (3-4), ESC [IEC] (4-5)\n\nClick "Time Table" to see the complete schedule!';
    }
    
    // General timetable response
    return '📅 **Your Complete Time Table - I Semester B.E 2025-26**\n\n**Section: CG | Classroom: 306**\n\n**Weekly Overview:**\n• **Monday**: Physics Lab (11-1), CAED Lab (2-4), Maths Lab (4-5)\n• **Tuesday**: ESC [IEC] (2-3), Maths (3-4), Kannada (4-5)\n• **Wednesday**: Maths (9-10), Physics (10-11), Programming in C (11-12), Soft Skills (2-3), CAED T (3-5)\n• **Thursday**: ESC [IEC] (9-10), PSC Lab (10-11), Physics (11-12), Maths (12-1), Programming in C (1-2)\n• **Friday**: Physics (2-3), Programming in C (3-4), ESC [IEC] (4-5)\n• **Saturday**: IDT Lab (9-1)\n\nClick the "Time Table" card to view the detailed schedule with locations!';
}

// Handle subject-specific questions
function handleSubjectQuestions(message) {
    // Check for specific subject queries
    for (const [subjectName, subjectData] of Object.entries(timetableData.subjects)) {
        if (message.includes(subjectName)) {
            return `📚 **${subjectName.toUpperCase()}**\n\n• **Code**: ${subjectData.code}\n• **Credits**: ${subjectData.credits}\n• **Instructor**: ${subjectData.instructor}\n• **Department**: ${subjectData.dept}\n\nThis subject is part of your I Semester curriculum. Click "Time Table" to see when this class is scheduled!`;
        }
    }
    
    // General subjects response
    return '📚 **Your Subjects - I Semester B.E 2025-26**\n\n• **Applied Mathematics I** (4 credits) - Dr. Amruthalakshmi M. R\n• **Applied Physics** (4 credits) - Dr. Digvijay N Singh\n• **Computer-Aided Engineering Drawing** (3 credits) - Prof. Madhavamurthy, Prof. Govindaraju\n• **Electronics & Communication Engineering** (3 credits) - Dr. Naveen K N\n• **Programming in C** (3 credits) - CS Department\n• **Soft Skills** (PP credits) - Prof. Meena Jagdesh\n• **C Programming Lab** (1 credit) - CS Department\n• **Innovation and Design Thinking Lab** (1 credit) - CG Department\n• **Kannada Language** (1 credit) - Prof. Kavita/Dr. Jayanth M\n\nClick "Time Table" to see when each subject is scheduled!';
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add some sample events data (in a real app, this would come from a database)
    console.log('DSI Student Portal loaded successfully!');
    
    // Add click handlers for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
