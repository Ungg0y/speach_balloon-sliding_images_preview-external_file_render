var scenario1 = new Object();
scenario1.setup = new Object();
scenario1.top = new Object();
scenario1.setup = new Object();
scenario1.level1 = new Object();
scenario1.level2 = new Object();
scenario1.level3 = new Object();
scenario1.ask = new Object();

scenario1.choice = {
    choice1: 'Manufacturing',
    choice2: 'SLED'
};
scenario1.setup = {
    conversation:[
        {
            response: '',
            salesRep: 'Where are you on your cloud Journey?  How do you know where your sensitive data is in the cloud?  What cloud Services do you use or are planning to use?',
            customer: 'We are just getting started on our migration plan with O365',
            choice1: '',
            choice2: '',
            salesRepAudio: 'S1RepB6.mp3',
            customerAudio: 'S1CustC7.mp3',
            choice1Audio: 'blank.mp3',
            choice2Audio: 'blank.mp3',
        }
    ]
};
scenario1.top = {
    conversation:[
        {
            response: 'good',
            salesRep: 'You meet with the McAfee Web gateway administrator and you ask about how they are securing cloud applications.',
            customer: '',
            choice1: 'This choice may be OK, but likely this person is not heavily involved in making decisions about cloud security. Ask discovery questions such as: &quot;Do you have facilities in remote locations that need to share files in the Cloud? Who can we ask to get answers?&quot; You may be able to use this process to get to the right personas in the account.',
            choice2: 'This choice may be OK, but likely this person is not heavily involved in making decisions about cloud security. Use Discovery questions like: &quot;How do you comply with your State/Department/Agency Regulations on data in the Cloud?&quot; You may be able to use this process to get to the right personas in the account.',
            salesRepAudio: 'blank.mp3', //'S1NarrF5.mp3',
            customerAudio: 'blank.mp3',
            choice1Audio: 'S1NarrH5I5.mp3',
            choice2Audio: 'S1NarrH5I5.mp3',
            image: 'help-desk.svg'
        },{
            response: 'best',
            salesRep: 'Use your Tech Champion in the Account to help set up a meeting with one of the following:  Cloud Transformation Manager, Cloud Architect, or CISO',
            customer: '',
            choice1: '',
            choice2: '',
            salesRepAudio: 'blank.mp3', //'S1NarrB5.mp3',
            customerAudio: 'blank.mp3',
            choice1Audio: 'blank.mp3',
            choice2Audio: 'blank.mp3',
            image: 'cloud-se.svg'
        },{
            response: 'bad',
            salesRep: 'You have your usual meeting with the Desktop/Server Team and ask them about how they are securing their cloud services',
            customer: '',
            choice1: 'This choice is likely NOT the right way to find out about cloud security within the account.  The desktop/server team probably won&apos;t have much to do with it.  Ask discovery questions like: &quot;Do you have facilities in remote locations that need to share files in the Cloud? Who can we ask to get answers?&quot; You may be able to use this process to get to the right personas.',
            choice2: 'This choice is likely NOT the right way to find out about cloud security within the account.  The desktop/server team probably won&apos;t have much to do with it. Use Discovery questions like: &quot;How do you comply with your State/Department/Agency Regulations on data in the Cloud?&quot;  You may be able to use this process to get to the right personas.',
            salesRepAudio: 'blank.mp3', //'S1NarrJ5.mp3',
            customerAudio: 'blank.mp3',
            choice1Audio: 'S1NarrL5M5.mp3',
            choice2Audio: 'S1NarrL5M5.mp3',
            image: 'marketing-manager.svg'
        }
    ]
};
scenario1.level1 = {
    conversation:[
        {
            response: 'best',
            salesRep: 'How are are you planning to secure your data in O365 during the migration and afterwards?',
            customer: 'We have a Microsoft E5 license and we are looking at using MCAS and AIP',
            choice1: '',
            choice2: '',
            salesRepAudio: 'blank.mp3', //'S1RepB8.mp3',
            customerAudio: 'S1CustC8.mp3',
            choice1Audio: 'blank.mp3',
            choice2Audio: 'blank.mp3',
        },
        {
            response: 'good',
            salesRep: 'Let&apos;s set up a meeting with the SE and he will give you a full preso and demo of our Cloud Security platform.',
            customer: 'Ok, sounds good.  I will schedule a entire day for a conference room, I need to learn more about this cloud stuff!',
            choice1: 'This could work for your contact to gain an understanding of what we do, but we need a better understanding of their PBO&apos;s and required capabilities.',
            choice2: 'This could work for your contact to gain an understanding of what we do, but we need a better understanding of their PBO&apos;s and required capabilities.',
            salesRepAudio: 'blank.mp3', //'S1RepF8.mp3',
            customerAudio: 'S1CustG8.mp3',
            choice1Audio: 'S1NarrH8I8.mp3',
            choice2Audio: 'S1NarrH8I8.mp3',
        },
        {
            response: 'bad',
            salesRep: 'Would you like a quote for <span class="red-text">M</span>VISION Cloud for O365?',
            customer: 'I&apos;m not sure it would do any good, we don&apos;t have budget right now.  Sorry…',
            choice1: 'You have not done any of the front 9 work for command of the message yet.  Most customers have not budgeted for cloud security at this point.',
            choice2: 'You have not done any of the front 9 work for command of the message yet.  Most customers have not budgeted for cloud security at this point.',
            salesRepAudio: 'blank.mp3', //'S1RepJ8.mp3',
            customerAudio: 'S1CustK8.mp3',
            choice1Audio: 'S1NarrL8M8.mp3',
            choice2Audio: 'S1NarrL8M8.mp3',
        }
    ]
};
scenario1.level2 = {
    conversation:[
        {
            response: 'good',
            salesRep: 'I can understand why you would want to go that way, but from what our other customers tell us, Microsoft did not fully meet their requirements for enterprise level cloud security.',
            customer: 'Oh really? From what I&apos;ve heard, it might be good enough for our company.',
            choice1: 'You might want to ask about what PBO&apos;s they are trying to achieve, along with their required capabilities.  You cannot build a case to prove this out yet.',
            choice2: 'You might want to ask about what PBO&apos;s they are trying to achieve, along with their required capabilities.  You cannot build a case to prove this out yet.',
            salesRepAudio: 'blank.mp3', //'S1RepF9.mp3',
            customerAudio: 'S1CustG9.mp3',
            choice1Audio: 'S1NarrH9I9.mp3',
            choice2Audio: 'S1NarrH9I9.mp3',
        },{
            response: 'best',
            salesRep: 'How important is realtime control of file sharing in OneDrive and Sharepoint to you?',
            customer: 'It&apos;s very important! We need to comply with State and Government regulations on how our data is used and how it is shared!',
            choice1: '',
            choice2: '',
            salesRepAudio: 'blank.mp3', //'S1RepB9.mp3',
            customerAudio: 'S1CustC9.mp3',
            choice1Audio: 'blank.mp3',
            choice2Audio: 'blank.mp3',
        },
        {
            response: 'bad',
            salesRep: 'I can talk to my Manager and get you the Deal of the Century on a 3 year license of <span class="red-text">M</span>VISION Cloud For O365',
            customer: 'Wow, ok what kind of numbers are we talking about, maybe I can fit it in my current budget.',
            choice1: 'You don&apos;t understand the customers required capabilites yet, therefore you have not established the value/PBO&apos;s they will receive by using our product.  They will only buy on price and likely never renew as they may not see value in what you are trying to deliver.',
            choice2: 'You don&apos;t understand the customers required capabilites yet, therefore you have not established the value/PBO&apos;s they will receive by using our product.  They will only buy on price and likely never renew as they may not see value in what you are trying to deliver.',
            salesRepAudio: 'blank.mp3', //'S1RepJ9.mp3',
            customerAudio: 'S1CustK9.mp3',
            choice1Audio: 'S1NarrL9M9.mp3',
            choice2Audio: 'S1NarrL9M9.mp3',
        }
    ]
};
scenario1.ask = {
    conversation:[
        {
            response: 'best',
            salesRep: 'Would you be willing to help me in setting up a Cloud Discovery Session with the right people in your company to identify your critical use cases for Cloud Security and to help your organization come up with a plan for addressing them?',
            customer: 'Sounds great! Who would you like from my company for me to invite?',
            choice1: '',
            choice2: '',
            salesRepAudio: 'blank.mp3', //'S1RepB10.mp3',
            customerAudio: 'S1CustC10_A.mp3',
            choice1Audio: 'blank.mp3',
            choice2Audio: 'blank.mp3',
        }
    ]
};