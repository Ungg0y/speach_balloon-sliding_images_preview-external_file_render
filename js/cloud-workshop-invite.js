var customer = new Array();
var mcafee = new Array();
var customer1 = new Array();
var mcafee1 = new Array();
var customer2 = new Array();
var mcafee2 = new Array();
var customer3 = new Array();
var mcafee3 = new Array();

customer1 = [
    {
        id: 'cloud-transformation-manager-team',
        image: 'cloud-transformation-manager-team',
        imageExtension: 'svg',
        persona: 'Cloud Transformation Manager / Team',
        teachable: 'This is a good persona to target',
        explained: 'The transformation manager is key to all of the cloud activities in the organization.  If they have one, they should be included',
        correct: 'yes'
    },
    {
        id: 'firewall-and-proxy-admin',
        image: 'firewall-and-proxy-admin',
        imageExtension: 'svg',
        persona: 'Firewall and/or Proxy Admin',
        teachable: 'There may be better personas to target.',
        explained: 'A Firewall and/or Proxy Admin (if for other Mfr&apos;s besides MFE) may try to work against you to push FW/Proxy Mfr&apos;s solution that they manage (PANW, Checkpoint, etc.)',
        correct: 'no'
    },
    {
        id: 'lead-cloud-architect',
        image: 'lead-cloud-architect',
        imageExtension: 'svg',
        persona: 'Lead Cloud Security Architect',
        teachable: 'This is a good persona to target',
        explained: 'The Lead Cloud Architect is responsible for setting standards for cloud development. They would need to be involved in this part of the sale',
        correct: 'yes'
    },
    {
        id: 'ciso-security-leadership',
        image: 'ciso-security-leadership',
        imageExtension: 'svg',
        persona: 'CISO / Security Leadership',
        teachable: 'This is a good persona to target',
        explained: 'The CISO is key to securing the companies cloud journey. They need to be involved 100%',
        correct: 'yes'
    },
    {
        id: 'desktop-server',
        image: 'desktop-server',
        imageExtension: 'svg',
        persona: 'Desktop / Server',
        teachable: 'There may be better personas to target.',
        explained: 'Desktop/Server Admins sometimes aren&apos;t even aware of new Cloud Security Initiatives, But may help broker the conversation for you',
        correct: 'no'
    },
    {
        id: 'core-infrastructure-network-admin',
        image: 'core-infrastructure-network-admin',
        imageExtension: 'svg',
        persona: 'Core Infrastructure/Network Admin',
        teachable: 'There may be better personas to target.',
        explained: 'The only reason this person would be involved is in the migration of DC Apps to Cloud. They may also push back',
        correct: 'no'
    },
    {
        id: 'help-desk',
        image: 'help-desk',
        imageExtension: 'svg',
        persona: 'Help Desk',
        teachable: 'There may be better personas to target.',
        explained: 'Help Desk Leadership will only need to be involved once the Cloud Project is fully complete and minimally even then',
        correct: 'no'
    },
    {
        id: 'vp-of-risk-management',
        image: 'vp-of-risk-management',
        imageExtension: 'svg',
        persona: 'VP of Risk Management',
        teachable: 'This is a good persona to target',
        explained: 'The VP of risk may be one of the key people to making sure that Cloud Security is implemented to mitigate risk for the company',
        correct: 'yes'
    },
    {
        id: 'application-owner-line-of-business-owner',
        image: 'application-owner-line-of-business-owner',
        imageExtension: 'svg',
        persona: 'Application Owner / Line of Business Owner',
        teachable: 'There may be better personas to target.',
        explained: 'Sometimes you might want to invite the application owner, but beware of owners like the Microsoft App owner, they might advocate for Microsoft security.',
        correct: 'no'
    }
];
mcafee1 = [
    {
        id: 'core-se',
        image: 'core-se',
        imageExtension: 'svg',
        persona: 'Core SE',
        teachable: 'This is a good persona to bring with you',
        explained: 'The Core SE should definitely be included to help tie the cloud initiates to the other technical initiatives that they are working on with the company',
        correct: 'yes'
    },
    {
        id: 'cloud-se',
        image: 'cloud-se',
        imageExtension: 'svg',
        persona: 'Cloud Specialist ETS',
        teachable: 'This is a good persona to bring with you',
        explained: 'The cloud SE, if available, is the expert on Use cases and how to sell our Cloud Security platform. They should  definitely be included',
        correct: 'yes'
    },
    {
        id: 'cloud-architect',
        image: 'cloud-architect',
        imageExtension: 'svg',
        persona: 'Cloud Architect ',
        teachable: 'This is a good persona to bring with you',
        explained: 'If the deal is large and strategic enough you might want to get them engaged.',
        correct: 'yes'
    },
    {
        id: 'regional-director',
        image: 'regional-director',
        imageExtension: 'svg',
        persona: 'Regional Director',
        teachable: 'There may be better personas to target.',
        explained: 'Probably don’t need them this early in the sales cycle',
        correct: 'no'
    },
    {
        id: 'partner-sales-rep',
        image: 'partner-sales-rep',
        imageExtension: 'svg',
        persona: 'Partner Sales Rep',
        teachable: 'This is a good persona to bring with you',
        explained: 'Probably a good idea to get the partner engaged early',
        correct: 'yes'
    },
    {
        id: 'partner-se',
        image: 'partner-se',
        imageExtension: 'svg',
        persona: 'Partner SE',
        teachable: 'This is a good persona to bring with you',
        explained: 'Probably a good idea to get the partner engaged early',
        correct: 'yes'
    },
    {
        id: 'marketing-manager',
        image: 'marketing-manager',
        imageExtension: 'svg',
        persona: 'Marketing Manager',
        teachable: 'There may be better personas to target.',
        explained: 'The marketing manager should be limited to very strategic opportunities or where roadmap is a key factor',
        correct: 'no'
    },
    {
        id: 'pro-services-engineer',
        image: 'pro-services-engineer',
        imageExtension: 'svg',
        persona: 'Pro Services Engineer',
        teachable: 'There may be better personas to target.',
        explained: 'Post sales does not need to be included this early',
        correct: 'no'
    },
    {
        id: 'support-engineer',
        image: 'support-engineer',
        imageExtension: 'svg',
        persona: 'Support engineer',
        teachable: 'There may be better personas to target.',
        explained: 'Post sales does not need to be included this early',
        correct: 'no'
    }
];
customer2 = [
    {
        id: 'cloud-transformation-manager-team',
        image: 'cloud-transformation-manager-team',
        imageExtension: 'svg',
        persona: 'Cloud Transformation Manager / Team',
        teachable: 'This is a good persona to target',
        explained: 'The transformation manager is key to all of the cloud activities in the organization. If they have one, they should be included',
        correct: 'yes'
    },
    {
        id: 'firewall-and-proxy-admin',
        image: 'firewall-and-proxy-admin',
        imageExtension: 'svg',
        persona: 'Firewall and/or Proxy Admin',
        teachable: 'There may be better personas to target.',
        explained: 'A Firewall and/or Proxy Admin (if for other Mfr&apos;s besides MFE) may try to work against you to push FW/Proxy Mfr&apos;s solution that they manage (PANW, Checkpoint, etc.)',
        correct: 'no'
    },
    {
        id: 'lead-cloud-architect',
        image: 'lead-cloud-architect',
        imageExtension: 'svg',
        persona: 'Lead Cloud Security Architect',
        teachable: 'This is a good persona to target',
        explained: 'The Lead Cloud Architect is responsible for setting standards for cloud development.  They would need to be involved in this part of the sale',
        correct: 'yes'
    },
    {
        id: 'ciso-security-leadership',
        image: 'ciso-security-leadership',
        imageExtension: 'svg',
        persona: 'CISO / Security Leadership',
        teachable: 'This is a good persona to target',
        explained: 'The CISO is key to securing the companies cloud journey. They need to be involved 100%',
        correct: 'yes'
    },
    {
        id: 'desktop-server',
        image: 'desktop-server',
        imageExtension: 'svg',
        persona: 'Desktop / Server',
        teachable: 'There may be better personas to target.',
        explained: 'Desktop/Server Admins sometimes aren&apos;t even aware of new Cloud Security Initiatives, But may help broker the conversation for you',
        correct: 'no'
    },
    {
        id: 'core-infrastructure-network-admin',
        image: 'core-infrastructure-network-admin',
        imageExtension: 'svg',
        persona: 'Core Infrastructure/Network Admin',
        teachable: 'There may be better personas to target.',
        explained: 'The only reason this person would be involved is in the migration of DC Apps to Cloud. They may also push back',
        correct: 'no'
    },
    {
        id: 'help-desk',
        image: 'help-desk',
        imageExtension: 'svg',
        persona: 'Help Desk',
        teachable: 'There may be better personas to target.',
        explained: 'Help Desk Leadership will only need to be involved once the Cloud Project is fully complete and minimally even then',
        correct: 'no'
    },
    {
        id: 'vp-of-risk-management',
        image: 'vp-of-risk-management',
        imageExtension: 'svg',
        persona: 'VP of Risk Management',
        teachable: 'This is a good persona to target',
        explained: 'The VP of risk may be one of the key people to making sure that Cloud Security is implemented to mitigate risk for the company',
        correct: 'yes'
    },
    {
        id: 'application-owner-line-of-business-owner',
        image: 'application-owner-line-of-business-owner',
        imageExtension: 'svg',
        persona: 'Application Owner / Line of Business Owner',
        teachable: 'This is a good persona to target',
        explained: 'In the case of IaaS/PaaS applications, the application owner may be the ultimate holder of the budget and may need to be onboard to help get money for the project',
        correct: 'yes'
    }
];
mcafee2 = [
    {
        id: 'core-se',
        image: 'core-se',
        imageExtension: 'svg',
        persona: 'Core SE',
        teachable: 'This is a good persona to bring with you',
        explained: 'The Core SE should definitely be included to help tie the cloud initiates to the other technical initiatives that they are working on with the company',
        correct: 'yes'
    },
    {
        id: 'cloud-se',
        image: 'cloud-se',
        imageExtension: 'svg',
        persona: 'Cloud Specialist ETS',
        teachable: 'This is a good persona to bring with you',
        explained: 'The cloud SE, if available, is the expert on Use cases and how to sell our Cloud Security platform. They should  definitely be included',
        correct: 'yes'
    },
    {
        id: 'cloud-architect',
        image: 'cloud-architect',
        imageExtension: 'svg',
        persona: 'Cloud Architect ',
        teachable: 'This is a good persona to bring with you',
        explained: 'If the deal is large and strategic enough you might want to get them engaged.',
        correct: 'yes'
    },
    {
        id: 'regional-director',
        image: 'regional-director',
        imageExtension: 'svg',
        persona: 'Regional Director',
        teachable: 'There may be better personas to target.',
        explained: 'Probably don&apos;t need them this early in the sales cycle',
        correct: 'no'
    },
    {
        id: 'partner-sales-rep',
        image: 'partner-sales-rep',
        imageExtension: 'svg',
        persona: 'Partner Sales Rep',
        teachable: 'This is a good persona to bring with you',
        explained: 'Probably a good idea to get the partner engaged early',
        correct: 'yes'
    },
    {
        id: 'partner-se',
        image: 'partner-se',
        imageExtension: 'svg',
        persona: 'Partner SE',
        teachable: 'This is a good persona to bring with you',
        explained: 'Probably a good idea to get the partner engaged early',
        correct: 'yes'
    },
    {
        id: 'marketing-manager',
        image: 'marketing-manager',
        imageExtension: 'svg',
        persona: 'Marketing Manager',
        teachable: 'There may be better personas to target.',
        explained: 'The marketing manager should be limited to very strategic opportunities or where roadmap is a key factor',
        correct: 'no'
    },
    {
        id: 'pro-services-engineer',
        image: 'pro-services-engineer',
        imageExtension: 'svg',
        persona: 'Pro Services Engineer',
        teachable: 'There may be better personas to target.',
        explained: 'Post sales does not need to be included this early',
        correct: 'no'
    },
    {
        id: 'support-engineer',
        image: 'support-engineer',
        imageExtension: 'svg',
        persona: 'Support engineer',
        teachable: 'There may be better personas to target.',
        explained: 'Post sales does not need to be included this early',
        correct: 'no'
    }
];
customer3 = [
    {
        id: 'cloud-transformation-manager-team',
        image: 'cloud-transformation-manager-team',
        imageExtension: 'svg',
        persona: 'Cloud Transformation Manager / Team',
        teachable: 'This is a good persona to target',
        explained: 'The transformation manager is key to all of the cloud activities in the organization. If they have one, they should be included',
        correct: 'yes'
    },
    {
        id: 'firewall-and-proxy-admin',
        image: 'firewall-and-proxy-admin',
        imageExtension: 'svg',
        persona: 'Firewall and/or Proxy Admin',
        teachable: 'There may be better personas to target.',
        explained: 'A Firewall and/or Proxy Admin (if for other Mfr&apos;s besides MFE) may try to work against you to push FW/Proxy Mfr&apos;s solution that they manage (PANW, Checkpoint, etc.)',
        correct: 'no'
    },
    {
        id: 'lead-cloud-architect',
        image: 'lead-cloud-architect',
        imageExtension: 'svg',
        persona: 'Lead Cloud Security Architect',
        teachable: 'This is a good persona to target',
        explained: 'The Lead Cloud Architect is responsible for setting standards for cloud development. They would need to be involved in this part of the sale',
        correct: 'yes'
    },
    {
        id: 'ciso-security-leadership',
        image: 'ciso-security-leadership',
        imageExtension: 'svg',
        persona: 'CISO / Security Leadership',
        teachable: 'This is a good persona to target',
        explained: 'The CISO is key to securing the companies cloud journey. They need to be involved 100%',
        correct: 'yes'
    },
    {
        id: 'desktop-server',
        image: 'desktop-server',
        imageExtension: 'svg',
        persona: 'Desktop / Server',
        teachable: 'There may be better personas to target.',
        explained: 'Desktop/Server Admins sometimes aren&apos;t even aware of new Cloud Security Initiatives, But may help broker the conversation for you',
        correct: 'no'
    },
    {
        id: 'core-infrastructure-network-admin',
        image: 'core-infrastructure-network-admin',
        imageExtension: 'svg',
        persona: 'Core Infrastructure/Network Admin',
        teachable: 'There may be better personas to target.',
        explained: 'The only reason this person would be involved is in the migration of DC Apps to Cloud. They may also push back',
        correct: 'no'
    },
    {
        id: 'help-desk',
        image: 'help-desk',
        imageExtension: 'svg',
        persona: 'Help Desk',
        teachable: 'There may be better personas to target.',
        explained: 'Help Desk Leadership will only need to be involved once the Cloud Project is fully complete and minimally even then',
        correct: 'no'
    },
    {
        id: 'vp-of-risk-management',
        image: 'vp-of-risk-management',
        imageExtension: 'svg',
        persona: 'VP of Risk Management',
        teachable: 'This is a good persona to target',
        explained: 'The VP of risk may be one of the key people to making sure that Cloud Security is implemented to mitigate risk for the company',
        correct: 'yes'
    },
    {
        id: 'application-owner-line-of-business-owner',
        image: 'application-owner-line-of-business-owner',
        imageExtension: 'svg',
        persona: 'Application Owner / Line of Business Owner',
        teachable: 'This is a good persona to target',
        explained: 'In the case of IaaS/PaaS applications, the application owner may be the ultimate holder of the budget and may need to be onboard to help get money for the project',
        correct: 'yes'
    }
];
mcafee3 = [
    {
        id: 'core-se',
        image: 'core-se',
        imageExtension: 'svg',
        persona: 'Core SE',
        teachable: 'This is a good persona to bring with you',
        explained: 'The Core SE should definitely be included to help tie the cloud initiates to the other technical initiatives that they are working on with the company',
        correct: 'yes'
    },
    {
        id: 'cloud-se',
        image: 'cloud-se',
        imageExtension: 'svg',
        persona: 'Cloud Specialist ETS',
        teachable: 'This is a good persona to bring with you',
        explained: 'The cloud SE, if available, is the expert on Use cases and how to sell our Cloud Security platform. They should  definitely be included',
        correct: 'yes'
    },
    {
        id: 'cloud-architect',
        image: 'cloud-architect',
        imageExtension: 'svg',
        persona: 'Cloud Architect ',
        teachable: 'This is a good persona to bring with you',
        explained: 'If the deal is large and strategic enough you might want to get them engaged.',
        correct: 'yes'
    },
    {
        id: 'regional-director',
        image: 'regional-director',
        imageExtension: 'svg',
        persona: 'Regional Director',
        teachable: 'There may be better personas to target.',
        explained: 'Probably don&apos;t need them this early in the sales cycle',
        correct: 'no'
    },
    {
        id: 'partner-sales-rep',
        image: 'partner-sales-rep',
        imageExtension: 'svg',
        persona: 'Partner Sales Rep',
        teachable: 'This is a good persona to bring with you',
        explained: 'Probably a good idea to get the partner engaged early',
        correct: 'yes'
    },
    {
        id: 'partner-se',
        image: 'partner-se',
        imageExtension: 'svg',
        persona: 'Partner SE',
        teachable: 'This is a good persona to bring with you',
        explained: 'Probably a good idea to get the partner engaged early',
        correct: 'yes'
    },
    {
        id: 'marketing-manager',
        image: 'marketing-manager',
        imageExtension: 'svg',
        persona: 'Marketing Manager',
        teachable: 'There may be better personas to target.',
        explained: 'The marketing manager should be limited to very strategic opportunities or where roadmap is a key factor',
        correct: 'no'
    },
    {
        id: 'pro-services-engineer',
        image: 'pro-services-engineer',
        imageExtension: 'svg',
        persona: 'Pro Services Engineer',
        teachable: 'This role may not add any value to your sale at this time',
        explained: 'There may be better personas to target.',
        correct: 'no'
    },
    {
        id: 'support-engineer',
        image: 'support-engineer',
        imageExtension: 'svg',
        persona: 'Support engineer',
        teachable: 'This role may not add any value to your sale at this time',
        explained: 'There may be better personas to target.',
        correct: 'no'
    }
];

/*customer = [
    {
        id: 'cloud-transformation-manager-team',
        image: 'cloud-transformation-manager-team',
        imageExtension: 'svg',
        persona: 'Cloud Transformation Manager / Team',
        teachable: 'Great JOB',
        explained: 'The transformation manager is key to all of the cloud activities in the organization.  If they have one, they should be included',
        correct: 'yes'
    },
    {
        id: 'firewall-and-proxy-admin',
        image: 'firewall-and-proxy-admin',
        imageExtension: 'svg',
        persona: 'Firewall and/or Proxy Admin',
        teachable: 'This role may not be involved in the cloud transformation and may not need to be there.',
        explained: 'A Firewall and/or Proxy Admin (if for other Mfr&apos;s beisdes MFE) may try to work against you to push FW/Proxy Mfr&apos;s solution',
        correct: 'no'
    },
    {
        id: 'lead-cloud-architect',
        image: 'lead-cloud-architect',
        imageExtension: 'svg',
        persona: 'Lead Cloud Security Architect',
        teachable: 'Great JOB',
        explained: 'The Lead Cloud Architect is repsonsible for setting standards for cloud development.  They would need to be involved in this part of the sale',
        correct: 'yes'
    },
    {
        id: 'ciso-security-leadership',
        image: 'ciso-security-leadership',
        imageExtension: 'svg',
        persona: 'CISO / Security Leadership',
        teachable: 'Great JOB',
        explained: 'The CISO is key to securing the companies cloud journey. They need to be involved 100%',
        correct: 'yes'
    },
    {
        id: 'desktop-server',
        image: 'desktop-server',
        imageExtension: 'svg',
        persona: 'Desktop / Server',
        teachable: 'This role may not be involved in the cloud transformation and may not need to be there.',
        explained: 'Desktop/Server Admins sometimes aren&apos;t even aware of new Cloud Security Initiatives, But may help broker the converstation for you',
        correct: 'no'
    },
    {
        id: 'core-infrastructure-network-admin',
        image: 'core-infrastructure-network-admin',
        imageExtension: 'svg',
        persona: 'Core Infrastructure/Network Admin',
        teachable: 'This role may not be involved in the cloud transformation and may not need to be there.',
        explained: 'The only reason this person would be involved is in the migration of DC Apps to Cloud. They may also push back',
        correct: 'no'
    },
    {
        id: 'help-desk',
        image: 'help-desk',
        imageExtension: 'svg',
        persona: 'Help Desk',
        teachable: 'This role may not be involved in the cloud transformation and may not need to be there.',
        explained: 'Help Desk Leadership will only need to be involved once the Cloud Project is fully complete and minimally even then',
        correct: 'no'
    },
    {
        id: 'vp-of-risk-management',
        image: 'vp-of-risk-management',
        imageExtension: 'svg',
        persona: 'VP of Risk Management',
        teachable: 'Great JOB',
        explained: 'The VP of risk may be one of the key people to making sure that Cloud Security is implemented to mitigate risk for the company',
        correct: 'yes'
    },
    {
        id: 'application-owner-line-of-business-owner',
        image: 'application-owner-line-of-business-owner',
        imageExtension: 'svg',
        persona: 'Application Owner / Line of Business Owner',
        teachable: 'Could be a good idea to have them, but Beware of the &quot;biggot&quot; type person such as OFC365 Owner might be a Microsoft biggot',
        explained: 'Often times the application owner is the ultimate holder of the budget and may need to be onboard to help get money for the project',
        correct: 'no'
    }
];
mcafee = [
    {
        id: 'core-se',
        image: 'core-se',
        imageExtension: 'svg',
        persona: 'Core SE',
        teachable: 'Great JOB',
        explained: 'The Core SE should definatly be included to help tie the cloud initiaves to the other technical initiaves that they are working on with the company',
        correct: 'yes'
    },
    {
        id: 'cloud-se',
        image: 'cloud-se',
        imageExtension: 'svg',
        persona: 'Cloud SE',
        teachable: 'Great JOB',
        explained: 'The cloud SE, if available, is the expert on Use cases and how to sell our Cloud Security platform. They should  definitely be included',
        correct: 'yes'
    },
    {
        id: 'cloud-architect',
        image: 'cloud-architect',
        imageExtension: 'svg',
        persona: 'Cloud Architect ',
        teachable: 'Great job, but they are a limited resource, should be reserved for large deals',
        explained: 'If the deal is large and strategtic enough you might want to get them engaged.',
        correct: 'yes'
    },
    {
        id: 'regional-director',
        image: 'regional-director',
        imageExtension: 'svg',
        persona: 'Regional Director',
        teachable: 'Might not need to be included in the intial meeting',
        explained: 'Correct. Probably don’t need them this early in the sales cycle',
        correct: 'no'
    },
    {
        id: 'partner-sales-rep',
        image: 'partner-sales-rep',
        imageExtension: 'svg',
        persona: 'Partner Sales Rep',
        teachable: 'Great Job It&apos;s a good idea to include them',
        explained: 'Probably a good idea to get the partner engaged early',
        correct: 'yes'
    },
    {
        id: 'partner-se',
        image: 'partner-se',
        imageExtension: 'svg',
        persona: 'Partner SE',
        teachable: 'Great Job It&apos;s a good idea to include them',
        explained: 'Probably a good idea to get the partner engaged early',
        correct: 'yes'
    },
    {
        id: 'marketing-manager',
        image: 'marketing-manager',
        imageExtension: 'svg',
        persona: 'Marketing Manager',
        teachable: 'These folks are a very limited resource.  It should be a HUGE deal, especially where roadmap is important to the customer.',
        explained: 'Correct, the marketing manager should be limited to very strategic opportunities or where roadmap is a key factor',
        correct: 'no'
    },
    {
        id: 'pro-services-engineer',
        image: 'pro-services-engineer',
        imageExtension: 'svg',
        persona: 'Pro Services Engineer',
        teachable: 'Post sales resources likely should not be included in this early in the sale.',
        explained: 'Correct. Post sales does not need to be included this early',
        correct: 'no'
    },
    {
        id: 'support-engineer',
        image: 'support-engineer',
        imageExtension: 'svg',
        persona: 'Support engineer',
        teachable: 'Post sales resources likely should not be included in this early in the sale.',
        explained: 'Correct. Post sales does not need to be included this early',
        correct: 'no'
    }
];*/