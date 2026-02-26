The Structural Integrity of National Communications: A Comprehensive Analysis of CALEA, Engineered Vulnerabilities, and the Paradox of Government Surveillance
The modern telecommunications landscape of the United States is defined by a fundamental duality: the requirement to facilitate lawful government surveillance and the necessity of maintaining robust cybersecurity against increasingly sophisticated global adversaries. At the center of this tension lies the Communications Assistance for Law Enforcement Act (CALEA) of 1994, a legislative mandate that transformed the architecture of American communications networks into a "wiretap-ready" infrastructure.[1, 2] While CALEA was designed to preserve the ability of law enforcement to monitor communications during the transition from analog to digital switching, it inadvertently created a standardized attack surface that has been exploited by state-sponsored threat actors.[3] The recent "Salt Typhoon" campaign, attributed to the People's Republic of China (PRC), represents a catastrophic validation of long-standing warnings from cybersecurity experts, demonstrating that mandated "backdoors" cannot be effectively restricted to authorized personnel.[4, 5, 6] This report provides an exhaustive examination of the evolution of CALEA, the technical failings of its implementation, the proliferation of mobile surveillance technologies, and the volatile regulatory environment governing the Federal Communications Commission (FCC).[7, 8, 9]
Legislative Foundations and the Evolution of CALEA Obligations
The enactment of CALEA on October 25, 1994, was the culmination of an intense lobbying effort by the Federal Bureau of Investigation (FBI), which feared that the rapid deployment of digital telephone exchange switches would render traditional wiretapping methods obsolete.[2, 10] Prior to CALEA, law enforcement agencies (LEAs) relied on physical access to the "local loop" or copper wiring at a phone company's central office. Digital switches, however, utilize complex software-driven routing that made such interceptions technically difficult or impossible without direct integration into the switching architecture.[2, 3]
CALEA (codified at 47 U.S.C. §§ 1001–1010) requires telecommunications carriers and equipment manufacturers to ensure that their systems are capable of isolating and intercepting communications content and call-identifying information.[1, 11] To facilitate the massive retrofitting of the Public Switched Telephone Network (PSTN), Congress initially provided $500 million in funding, though this amount was later recognized as insufficient to cover the total costs of industry-wide compliance.[3, 10]
Jurisdictional Milestone
Year
Action and Regulatory Scope
Enactment of CALEA
1994
Mandated digital telephony wiretap capabilities for common carriers.[2]
CALEA Implementation
1995
Statutory compliance requirements for manufacturers and carriers began.[2]
Expansion to Broadband
2005
FCC First Report and Order applied CALEA to facilities-based ISPs.[2, 12]
Expansion to VoIP
2005
FCC ruled that interconnected VoIP services are "telecommunications carriers".[2, 10]
Compliance Deadline
2007
Mandatory CALEA compliance for all broadband and VoIP providers.[10]
Cybersecurity Ruling
2025
FCC (Rosenworcel) attempted to link CALEA to mandatory cyber standards.[7]
Rule Rescission
2025
FCC (Carr) rescinded the 2025 cybersecurity mandates as "legally erroneous".[9]
The scope of CALEA has expanded significantly beyond its original focus on traditional voice telephony. In 2004, the Department of Justice (DOJ), FBI, and Drug Enforcement Administration (DEA) filed a joint petition with the FCC, seeking to classify broadband internet and Voice over Internet Protocol (VoIP) as "telecommunications services" subject to CALEA.[2, 12] Despite vigorous opposition from the Electronic Frontier Foundation (EFF) and academic researchers—who argued that the 1994 Act explicitly exempted "information services"—the FCC and later the D.C. Circuit Court of Appeals affirmed that these technologies functioned as replacements for conventional telephony and must therefore facilitate surveillance.[2, 10, 12]
Under the current regulatory framework, "covered entities" include not only traditional wireline and wireless carriers but also facilities-based fixed and mobile broadband internet access service (BIAS) providers and interconnected VoIP providers.[7, 13] These entities are required to file System Security and Integrity (SSI) plans with the FCC, detailing the policies and procedures they have in place to ensure that interceptions are performed lawfully and that only authorized government personnel gain access to the data.[1, 11] As of May 15, 2023, the FCC’s Public Safety and Homeland Security Bureau mandated the electronic filing of these SSI plans through a centralized portal, signaling an attempt to increase regulatory oversight of a historically opaque compliance process.[1]
The Technical Architecture of Vulnerability: The Backdoor Paradox
The central criticism of CALEA, articulated by cybersecurity experts such as Matt Blaze and David Farber, is that it forces the introduction of "architected security breaches" into the core of the national infrastructure.[3] By requiring a standardized, programmatic interface for wiretapping, CALEA creates a "hook" in the software of every digital switch—a hook that, if compromised, allows an attacker to perform surveillance at scale without detection.[3, 4]
The Signaling Vulnerability and "C-Tone" Exploitation
In 2005, researchers demonstrated that the technical standards developed for CALEA compliance (specifically J-STD-025A) were riddled with fundamental flaws.[3] These systems relied heavily on "in-band" signaling, where the signals used to control the recording device are transmitted over the same channel as the audio content.[3] This architecture allows a sophisticated target to employ "unilateral countermeasures" to thwart surveillance. For example, a target can broadcast a specific audio tone—known as a "C-tone"—that is interpreted by the interception equipment as an instruction to stop recording, even while the conversation continues.[3] These audio gaps in law enforcement recordings were reported in actual investigations, suggesting that organized crime may have utilized these vulnerabilities as early as the mid-2000s.[3]
Furthermore, the research indicated that metadata collection—the "Trap and Trace" or "Pen Register" portion of a CALEA tap—could be easily spoofed.[3] Targets could manipulate the signaling packets to make it appear that they were dialing a different number or that a call had ended when it was still active, thereby poisoning the evidence collected by investigators.[3]
System Complexity and the Attack Surface
The transition from the monolithic, regulated monopoly of AT&T’s PSTN to a fragmented ecosystem of thousands of internet service providers (ISPs) and VoIP developers has exponentially increased the complexity of securing CALEA interfaces.[3] In the PSTN era, security was maintained through physical control of switching premises and the strict separation of communication content from signaling information.[3] In the modern IP-based environment, CALEA functionality is often delegated to dedicated network elements or "soft switches" that lack the robust, high-assurance development cycles found in military-grade equipment.[2, 3]
Many smaller carriers, unable to afford the sophisticated hardware required for CALEA compliance, rely on "Trusted Third Party" (TTP) service providers to manage their interception requests.[3, 14] These TTPs represent a massive centralization of sensitive data, acting as a single point of failure. If a TTP is compromised, a foreign adversary gains access to the interception orders and the communications of every carrier served by that provider.[3, 5]
Interception Type
Technical Mechanism
Data Siphoned
Pen Register
Meta-data recording on outbound calls
Dialed numbers, time, duration, location.[2]
Trap and Trace
Meta-data recording on inbound calls
Incoming numbers, time, duration.[2]
Title III Wiretap
Full content interception
Voice audio, text message content, data packets.[2]
CALEA Interface
Software-defined "TEE" or splitter
Duplicates all traffic for LEA delivery.[4]
SSI Plan
Compliance documentation
Internal security protocols and LEA contact info.[1]
Salt Typhoon: The Strategic Exploitation of CALEA by Foreign Adversaries
The catastrophic risks inherent in CALEA-mandated backdoors were fully realized in late 2024 with the discovery of the "Salt Typhoon" campaign.[4, 5] Salt Typhoon, also known as Earth Estries or GhostEmperor, is a highly sophisticated advanced persistent threat (APT) group sponsored by the People's Republic of China (PRC).[5, 6] This group engaged in a multi-year campaign to infiltrate the core infrastructure of the United States' largest telecommunications providers, specifically targeting the systems used for CALEA compliance.[4, 5]
Detailed Mechanics of the Breach
Unlike common cyberattacks that focus on financial theft or temporary disruption, Salt Typhoon’s objective was long-term, large-scale espionage.[5] The group successfully compromised network equipment from manufacturers such as Cisco and Fortinet, exploiting both zero-day vulnerabilities and unpatched, publicly known common vulnerabilities and exposures (CVEs).[5, 9]
The technical tradecraft of Salt Typhoon was characterized by its "living-off-the-land" tactics. Once inside a telecom network, the attackers utilized legitimate administrative tools—such as WMIC.exe, PsExec, and PowerShell—to move laterally across the infrastructure.[5] This allowed them to remain undetected for months, if not years, as they siphoned off immense quantities of data.[5]
Exploited CVE / Tool
Purpose
Impact of Compromise
CVE-2023-46805
VPN/Firewall bypass (Ivanti)
Initial entry into telecommunications networks.[5]
CVE-2024-21887
Command injection (Ivanti)
Execution of malicious code on network gates.[5]
CVE-2021-26855
Microsoft Exchange exploit
Access to internal corporate communications.[5]
GhostSpider RAT
Custom Backdoor
Persistent remote control over compromised nodes.[5]
PsExec / WMIC
Living-off-the-land tools
Stealthy lateral movement within carrier systems.[5]
The breach of the CALEA systems themselves was the most damaging aspect of the campaign. By gaining access to the wiretap management interfaces, the PRC gained visibility into the U.S. government’s own surveillance operations.[3, 5] This allowed the Chinese government to identify which of its own agents were under U.S. investigation, effectively neutralizing American counterintelligence efforts.[3, 5, 15] Furthermore, the attackers were able to exfiltrate the live communications of high-profile political figures, including senior members of both the Trump and Harris presidential campaigns, as well as high-ranking government officials.[3, 5]
The National Security Fallout
The severity of the Salt Typhoon intrusion has forced a reckoning within the U.S. government regarding the security of its communications backbone. The Government Accountability Office (GAO) and other national security agencies have discussed the necessity of "ripping and replacing" vast portions of the nation’s telecommunications hardware, as the depth of the compromise makes it nearly impossible to ensure that no backdoors remain.[5]
The incident confirms a fundamental truth of cybersecurity: a backdoor designed for "the good guys" is a target for everyone else.[12] In an era of state-sponsored cyber warfare, the standardization of surveillance interfaces acts as a force multiplier for foreign intelligence services, providing them with a "point-and-click" method for wiretapping the entire nation.[12]
The Regulatory Pendulum: The FCC’s Conflict Over Cybersecurity Mandates
In the wake of the Salt Typhoon discovery, the FCC became the center of a fierce debate over how to secure the telecommunications sector. This debate revealed deep ideological divisions within the Commission, leading to a rapid reversal of policy following the 2024 U.S. presidential election.[6, 9]
The January 2025 Declaratory Ruling
On January 16, 2025, in the final days of Chairwoman Jessica Rosenworcel’s tenure, the FCC issued a landmark Declaratory Ruling and a Notice of Proposed Rulemaking (NPRM).[6, 7] The Commission argued that Section 105 of CALEA—which requires carriers to ensure that interceptions can be performed "only in accordance with a lawful authorization"—affirmatively obligated telecommunications carriers to secure their entire networks from unauthorized access.[7, 13]
The ruling proposed a set of prescriptive cybersecurity requirements, including:
• Implementation of multifactor authentication (MFA) for all system access.[7]
• Mandatory use of role-based access controls to limit lateral movement.[7]
• Requirement for minimum password strength and the rotation of default credentials.[7]
• Annual certification of cybersecurity and supply chain risk management plans, to be submitted via the Network Outage Reporting System (NORS).[7, 13]
The Rosenworcel-led Commission framed these rules as an essential response to the Salt Typhoon hack, arguing that voluntary industry standards had failed to protect national security.[7, 13]
The November 2025 Rescission and the "Carr Doctrine"
Following the change in administration, the new FCC, led by Chairman Brendan Carr, moved swiftly to rescind the January ruling.[9, 16] In a 2–1 vote on November 20, 2025, the Commission issued an Order on Reconsideration, concluding that the previous ruling was "unlawful," "legally erroneous," and "unnecessary".[9]
Chairman Carr argued that CALEA was intended solely to facilitate wiretaps, not to provide the FCC with broad authority over the cybersecurity of every portion of a carrier’s network.[6, 9] The Commission's new majority labeled the previous rules as "one-size-fits-all" mandates that would hinder the "agility" of private providers to respond to a dynamic threat landscape.[9, 16] Instead, the Carr Commission advocated for a "collaborative approach" based on public-private partnerships, such as the Communications Cybersecurity Information Sharing and Analysis Center (C2 ISAC).[6, 9]
Commissioner Anna Gomez, in a sharp dissent, argued that rescinding these rules left the country "less safe".[9] She contended that "handshake agreements" without enforceable standards would ensure that the "weakest link in the chain" would remain a point of entry for foreign hackers.[9] This regulatory volatility highlights the fundamental tension between a government that seeks to mandate security and an industry that prioritizes operational flexibility and reduced regulatory burden.[9, 17]
Mobile Surveillance: StingRays and the Culture of Secrecy
While CALEA manages the stationary network, the "truth" about government surveillance on the move is defined by the use of cell-site simulators, commonly known as "StingRays".[8, 18] These devices represent a significant shift in surveillance power, allowing the government to bypass the telecommunications carrier entirely and track individuals directly through the electromagnetic spectrum.[18, 19]
Technical Operations and the "IMSI Catcher"
A StingRay acts as a bogus mobile cell tower.[19, 20] It exploits the way mobile phones are programmed to always connect to the strongest available signal.[18] By broadcasting a signal that appears more powerful than legitimate towers, the StingRay tricks all devices within its radius (often several hundred meters) into connecting to it.[18]
Once a phone is connected, the StingRay can perform several invasive actions:
• Active Identification: It forces the phone to transmit its International Mobile Subscriber Identity (IMSI), a unique code that acts as a digital fingerprint for the user.[18, 20]
• Precise Triangulation: By measuring signal strength from multiple locations (often from a vehicle or an aircraft), police can pinpoint a suspect’s location to within a few meters, even inside private residences.[18, 19]
• Metadata and Content Interception: If the device can downgrade the phone’s connection to an older, unencrypted 2G/GSM standard, it can intercept call metadata, text messages, and even live audio.[18, 19]
• Denial of Service: Because the phone is connected to the simulator rather than a legitimate tower, the user may be unable to place or receive calls, including emergency 9-1-1 calls.[19, 21]
The Secrecy Regime and Harris Corporation NDAs
The primary controversy surrounding StingRay technology is the extreme secrecy mandated by the FBI and the equipment’s primary manufacturer, Harris Corporation.[8, 22] Local and state law enforcement agencies are required to sign strict Non-Disclosure Agreements (NDAs) as a condition of purchasing the equipment.[8] These NDAs often prohibit police from disclosing the use of the technology to the public, the press, and the courts.[8, 22]
In Florida, police admitted to using StingRays at least 200 times without obtaining a warrant or notifying the court system, citing the Harris NDAs as the reason for their silence.[8] When judicial requests for information are made, federal agencies have gone to extreme lengths to protect the technology. In 2014, U.S. Marshals physically seized surveillance records from local Florida police to prevent them from being released in court.[8]
Judges, such as former U.S. Magistrate Judge Brian Owsley, have expressed alarm at how law enforcement "deceptively" obtains authorization for StingRays.[8, 18] Police often file "pen register" applications, which are traditionally used for recording dialed numbers from a carrier, without explaining to the judge that they intend to use a broadcast device that will interact with thousands of innocent bystanders’ phones.[8, 22] This practice effectively circumvents the Fourth Amendment’s requirement for a warrant based on probable cause.[22, 23]
FCC Oversight and the Internal Task Force
The FCC’s role in mobile surveillance is complicated. On one hand, the Enforcement Bureau aggressively polices the illegal use of signal jammers by the public.[21, 24] On the other hand, the Commission has been criticized for being "complicit" in the proliferation of surveillance tools that function through signal manipulation.[19]
In 2014, the FCC created an internal task force to study the misuse of IMSI catchers.[19] The task force's findings demonstrated that foreign intelligence services and cybercriminals could use the same technology as U.S. law enforcement to spy on American diplomats, businesses, and citizens.[19, 20] Despite these findings, the FCC has historically focused its enforcement efforts on unauthorized jamming rather than regulating the surveillance capabilities of law enforcement.[21, 25]
Frequency Enforcement: The Selective Policing of the Spectrum
The Federal Communications Commission maintains a strict regime of "Frequency Enforcement" through its Enforcement Bureau.[21, 24] The legal framework for this enforcement is rooted in the Communications Act of 1934, which prohibits any "willful or malicious interference" with authorized radio communications.[21, 26]
The War on Jammers
The FCC considers signal jamming to be a significant threat to public safety infrastructure.[21, 26] Jammers work by transmitting radio signals on the same frequencies used by targeted devices—such as GPS, Wi-Fi, or cellular networks—overpowering the legitimate signal and rendering the devices useless.[27, 28]
Enforcement Target
Legal Violation
Penalty Scope
Online Retailers
Marketing/Selling Jammers
Citations, large monetary fines, equipment seizure.[29, 30]
Foreign Manufacturers
Importing Jammers
Forfeitures (e.g., $34.9M against CTS Technology).[30, 31]
Employers
Operating Jammers
Fines for interference and operating without a license.[26, 32]
Consumers
Purchasing/Using Jammers
Potential civil and criminal penalties, imprisonment.[21, 31]
The FCC has pursued multi-million dollar fines against foreign companies like C.T.S. Technology Co., which marketed hundreds of models of illegal jammers to U.S. consumers.[30, 31] Domestically, the FCC has clamped down on business owners who use jammers to prevent employees from using their phones at work.[26, 32] In the "Ravi’s Import Warehouse" case, the business owner was fined $22,000 for using a jammer that disrupted AT&T's network in the surrounding area.[26, 32]
The Disparity in Enforcement
Critics point out a glaring disparity in how the FCC treats spectrum interference. While a private citizen or business owner using a jammer faces massive fines and potential imprisonment, the use of "active" IMSI catchers by law enforcement—which also disrupts communications and prevents 9-1-1 calls—operates with significant legal protection and federal shielding.[18, 19] This selective enforcement suggests that the "integrity of the communications infrastructure" is prioritized only when it is threatened by non-governmental actors.[22, 26]
Furthermore, the FCC's Enforcement Bureau has been significantly reduced in size over the last two decades, even as incidents of both accidental and intentional GPS interference have increased.[25] In 2022, a major GPS interference event in Denver lasted 33 hours before it was geo-located, and a similar event in Dallas lasted 24 hours without the source ever being found.[25] This lack of detection capability highlights a growing vulnerability: the government is increasingly reliant on a spectrum it cannot fully protect.[25, 28]
The Future of Surveillance: AI, ALPR, and Digital Mandates
As the technical methods for surveillance evolve, the 2025–2026 timeframe marks a transition toward automated, AI-driven tracking and the potential for government-mandated software on consumer devices.[33, 34, 35]
The Flock Safety ALPR Network
The proliferation of Automated License Plate Readers (ALPRs) has created a nationwide mass surveillance network that operates with minimal oversight.[33, 36] Flock Safety, a leading provider of these systems, has built an interconnected database that allows law enforcement to track the movement of vehicles across state lines.[33, 35]
EFF investigations in 2025 revealed that the Flock network is being used for highly targeted, and often discriminatory, surveillance.[33] Audit logs showed that:
• Law enforcement agencies used racial slurs and stereotypes to perform "convoy" searches, targeting specific minority communities like the Romani people.[33]
• The system was utilized to monitor protesters exercising their First Amendment rights and to track women seeking reproductive healthcare in states where such services are restricted.[33]
• New AI-driven features are being deployed to report "suspicious" movement patterns to police, a form of predictive policing that relies on opaque algorithms.[35]
Government-Mandated Software and Updates
A burgeoning threat to digital liberty is the move by governments around the world to mandate the installation of specific software on smartphones.[34] In 2025, countries like Russia and India mandated the pre-installation of government-approved "cybersecurity" or "messaging" apps (such as "Max" and "Sanchar Saathi").[34] These apps serve as a persistent "backdoor" directly on the user’s device, capable of monitoring financial transactions, communications, and location data.[34]
The risk is amplified by the nature of modern software updates. If a user is required to install an app, they are also required to accept updates, which can be used to push malicious features or expand the scope of surveillance without the user’s knowledge.[34] The ACLU has warned that the move toward digital driver’s licenses in the U.S. could serve as a precursor to a "Great Internet Lockdown," where access to the digital economy is conditional upon the use of government-monitored identity software.[35]
Conclusion: The Integrated Surveillance State
The "truth" about government surveillance in the 21st century is that it is no longer a series of isolated interceptions; it is a structural reality integrated into the very fabric of our communications infrastructure.[4, 12] CALEA has transformed our networks into a dual-use asset: a tool for law enforcement and a target for global cyber warfare.[3, 5] The Salt Typhoon hack serves as a definitive warning that "secured" backdoors are an impossibility in a world of persistent, state-sponsored threats.[5, 15]
Simultaneously, the proliferation of StingRays and ALPR networks has extended the government's reach into every corner of public and private life, often shielded by NDAs and a lack of judicial transparency.[8, 33] The FCC’s selective enforcement of frequency laws and its ideological flip-flopping on cybersecurity standards further complicate the landscape, leaving the national infrastructure vulnerable to exploitation.[9, 26]
As AI models begin to automate the surveillance process and digital identity mandates loom on the horizon, the tension between state power and individual privacy has reached a critical juncture.[35, 36] The structural vulnerabilities created by CALEA are now being compounded by AI-driven dragnets, creating a surveillance apparatus that is both ubiquitous and increasingly difficult to hold accountable.[3, 33, 35] Without a fundamental re-evaluation of the "backdoor" paradigm and a commitment to high-assurance security standards, the communications networks that power the nation will remain its greatest strategic liability.
--------------------------------------------------------------------------------
1. Communications Assistance for Law Enforcement Act, https://www.fcc.gov/calea
2. Communications Assistance for Law Enforcement Act - Wikipedia, https://en.wikipedia.org/wiki/Communications_Assistance_for_Law_Enforcement_Act
3. CALEA Was a National Security Disaster Waiting to Happen | Lawfare, https://www.lawfaremedia.org/article/calea-was-a-national-security-disaster-waiting-to-happen
4. Arguing Against CALEA - Schneier on Security, https://www.schneier.com/blog/archives/2025/04/arguing-against-calea.html
5. Salt Typhoon Threat Actor: Insights From NetWitness Experts, https://www.netwitness.com/blog/brave-the-storm-surfing-the-wake-of-salt-typhoon/
6. Orders TOC by Paragraph.dot - Federal Communications Commission, https://docs.fcc.gov/public/attachments/DOC-415190A1.pdf
7. FCC Expands Scope of CALEA Obligations - Lerman Senter, https://www.lermansenter.com/fcc-expands-scope-of-calea-obligations/
8. Stingray phone tracker - Wikipedia, https://en.wikipedia.org/wiki/Stingray_phone_tracker
9. Federal Communications Commission FCC 25-81 Before the ..., https://docs.fcc.gov/public/attachments/FCC-25-81A1.pdf
10. The Communications Assistance for Law Enforcement Act - EveryCRSReport.com, https://www.everycrsreport.com/reports/RL30677.html
11. Communications Assistance for Law Enforcement Act (CALEA) - IP Mall, https://ipmall.info/sites/default/files/hosted_resources/CyberCrime/usamay2001_4.pdf
12. CALEA | Electronic Frontier Foundation, https://www.eff.org/issues/calea
13. FCC Responds to Cybersecurity Threats with CALEA Ruling - Beyond Telecom Law Blog, https://www.beyondtelecomlawblog.com/fcc-responds-to-cybersecurity-threats-with-calea-ruling/
14. Shutting the Backdoor: The Perils of National Security and Digital Surveillance Programs - Canadian Global Affairs Institute, https://www.cgai.ca/shutting_the_backdoor
15. FCC Drops Telecom Cyber Rules Despite China Espionage Warnings | eSecurity Planet, https://www.esecurityplanet.com/threats/fcc-drops-telecom-cyber-rules-despite-china-espionage-warnings/
16. Joint Statement on FCC Rescinding Declaratory Ruling on CALEA - NCTA, https://www.ncta.com/news/joint-statement-on-fcc-rescinding-declaratory-ruling-on-calea
17. Joint Statement on FCC Rescinding Declaratory Ruling on CALEA - CTIA, https://www.ctia.org/news/joint-statement-on-fcc-rescinding-declaratory-ruling-on-calea
18. Cell-Site Simulators/ IMSI Catchers - Street Level Surveillance, https://sls.eff.org/technologies/cell-site-simulators-imsi-catchers
19. StingRay Technology: How Government Tracks Cellular Devices ..., https://www.infosecinstitute.com/resources/general-security/stingray-technology-government-tracks-cellular-devices/
20. Stingrays and IMSI-Catchers | National Security Archive, https://nsarchive.gwu.edu/news/cyber-vault/2019-11-15/stingrays-imsi-catchers
21. Jammer Enforcement | Federal Communications Commission, https://www.fcc.gov/general/jammer-enforcement
22. Stingray Tracking Devices | American Civil Liberties Union, https://www.aclu.org/issues/privacy-technology/surveillance-technologies/stingray-tracking-devices
23. Privacy and Surveillance | American Civil Liberties Union, https://www.aclu.org/issues/national-security/privacy-and-surveillance
24. Signal Jamming - Federal Communications Commission, https://www.fcc.gov/tags/signal-jamming
25. FCC investigates Amazon over alleged marketing of wireless signal jammers - NBC - RNTF, https://rntfnd.org/2024/03/25/fcc-investigates-amazon-over-alleged-marketing-of-wireless-signal-jammers-nbc/
26. Use of Signal Jammer to Prevent Employees from Using their Phones at Work Results in FCC Fine, https://www.sgrlaw.com/use-of-signal-jammer-to-prevent-employees/
27. Make A Signal Jammer - Sema, https://mirante.sema.ce.gov.br/Download_PDFS/603063/mL6725/Make%20A%20Signal%20Jammer.pdf
28. Does Jammer Stop CCTV? A Comprehensive Guide, https://wenhong.com.sg/does-jammer-stop-cctv-a-comprehensive-guide/
29. _ - Federal Communications Commission, https://docs.fcc.gov/public/attachments/DOC-310226A1.doc
30. FCC Fines Chinese Retailer $34.9m For Marketing Illegal 'Jammers', https://www.fcc.gov/document/fcc-fines-chinese-retailer-349m-marketing-illegal-jammers
31. Federal Communications Commission FCC 14-92, https://apps.fcc.gov/edocs_public/attachmatch/FCC-14-92A1.pdf
32. FCC Imposes Fine for Illegal Signal Jammer - In Compliance Magazine, https://incompliancemag.com/fcc-imposes-fine-for-illegal-signal-jammer/
33. EFF's Investigations Expose Flock Safety's Surveillance Abuses: 2025 in Review, https://www.eff.org/deeplinks/2025/12/effs-investigations-expose-flock-safetys-surveillance-abuses-2025-review
34. Government-Mandated Software a Looming Threat to Freedom - ACLU, https://www.aclu.org/news/privacy-technology/government-mandated-software
35. Jay Stanley's ACLU writing | American Civil Liberties Union, https://www.aclu.org/jay-stanleys-aclu-writing
36. Transparency | Electronic Frontier Foundation, https://www.eff.org/issues/transparency