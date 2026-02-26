Signal Shadows: A Comprehensive Analysis of Cell-Site Simulator Proliferation, Technical Architecture, and the Crisis of Telecommunications Privacy
The modern cellular landscape is underpinned by a fundamental protocol flaw: the inherent trust a mobile device places in the network infrastructure. This vulnerability has facilitated the emergence of the cell-site simulator (CSS), a class of surveillance technology that exploits the basic Handshake mechanisms of mobile telephony to identify, track, and intercept communications. Known colloquially by the brand name "Stingray," these devices represent one of the most significant challenges to Fourth Amendment protections and personal privacy in the twenty-first century. As these tools have transitioned from the exclusive domain of military and national intelligence agencies to local law enforcement and, increasingly, criminal syndicates, the legal and ethical frameworks governing their use have struggled to keep pace with the rapid democratization of the hardware required for their operation.
The Technical Foundations of Cellular Interception
To understand the operational efficacy of cell-site simulators, one must first analyze the architecture of cellular networks and the specific protocols governing how a mobile station (UE) interacts with a Base Transceiver Station (BTS). In standard network operations, a mobile device continuously scans its environment for the strongest signal to maintain service quality.[1, 2] This process is governed by the priority lists stored on the Subscriber Identity Module (SIM) card and the broadcast parameters of the local network.[3, 4]
The Mechanism of the IMSI Catch-and-Release
At the heart of cellular identity is the International Mobile Subscriber Identity (IMSI), a unique 15-digit number that identifies a subscriber within the Global System for Mobile Communications (GSM) and subsequent generations.[4, 5] A cell-site simulator functions by masquerading as a legitimate cell tower, broadcasting a signal that is either physically stronger than the surrounding towers or carries a higher priority configuration.[1, 6, 7]
When a mobile device enters the radius of a simulator, it is tricked into performing a Location Area Update (LAU). The simulator, acting as the network, then issues an "Identity Request" to the device.[4] In compliance with the protocol, the phone transmits its IMSI, and in some cases, its International Mobile Equipment Identity (IMEI), which identifies the physical hardware.[8, 9] In a "catch-and-release" operation, the simulator logs these identifiers and then immediately releases the phone back to the legitimate network, often without the user experiencing more than a momentary dip in service.[3, 4, 9]
Active versus Passive Modalities
The surveillance industry distinguishes between passive and active devices based on their interaction with the radio spectrum. Passive devices, or "digital analyzers," function as high-gain radio receivers that "listen" to the ambient paging and broadcast channels of legitimate towers.[1, 10] They do not transmit signals and are thus virtually impossible to detect with standard equipment.[1, 10] However, their utility is limited to areas where phones are already actively communicating.[9, 10]
Active cell-site simulators, by contrast, engage in bidirectional communication. They transmit their own signals to force connections, allowing for a broader range of intrusive capabilities, including real-time location tracking, metadata collection, and the interception of unencrypted content.[1, 9, 11]
Capability
Passive (IMSI Catcher)
Active (Cell-Site Simulator)
Primary Function
Monitoring ambient identifiers
Forced connectivity and tracking
Detection Profile
Undetectable (receive-only)
Detectable via signal anomalies
Data Extraction
IMSI, TMSI, IMEI from airwaves
IMSI, location, metadata, content
Interference
None
Network disruption, jamming
Range
Limited to proximity of broadcast
Dependent on transmission power
Protocol Evolution: From 2G Vulnerabilities to 5G Exploits
The historical efficacy of simulators is largely rooted in the 2G (GSM) standard, which lacks mutual authentication—meaning the phone verifies the tower, but the tower is not required to verify itself to the phone.[4, 6, 12] While 3G, 4G, and 5G introduced mutual authentication and stronger encryption, simulators circumvent these defenses through "downgrade attacks".[4, 9, 13] By jamming the frequencies used by newer networks or sending specific protocol rejection codes, a simulator can force a smartphone to fall back to a 2G connection, where legacy vulnerabilities can be exploited.[1, 4, 7, 13]
In the 5G era, researchers have identified new vulnerabilities, such as the "SNI5GECT" attack. This attack exploits unencrypted session coordination parameters during the initial 5G handshake.[13] An attacker within a 20-meter radius can inject malicious data packets before encryption is established, causing the target's modem to reboot or force-switching it to a 4G network for easier tracking.[13] This demonstrates that while cellular security has improved, the requirement for backward compatibility continues to provide a fertile ground for interception technology.[12, 13]
Law Enforcement Deployment and Institutional Secrecy
The use of cell-site simulators by United States law enforcement has been a point of significant contention, characterized by widespread deployment and a high degree of institutional secrecy. Since the mid-1990s, federal agencies have utilized these tools, eventually facilitating their adoption by state and local police departments through federal grant programs.[14, 15]
Agency Adoption and Operational Scale
A diverse array of federal, state, and local agencies have integrated simulators into their investigative toolkits. The Department of Justice (DOJ) and the Department of Homeland Security (DHS) have spent millions of dollars on this technology, often providing it to local task forces.[1, 15]
Agency Tier
Entities Known to Use Cell-Site Simulators
Federal Law Enforcement
FBI, DEA, Secret Service, U.S. Marshals, ICE, IRS
Military and Intelligence
NSA, U.S. Army, Navy, Marine Corps, National Guard
Local and State
Baltimore PD, NYPD, LAPD, Chicago PD, Florida State Police
The scale of use is often hidden from public view. For instance, it was revealed that the Baltimore Police Department used simulators over 4,300 times within an eight-year period, often for investigations into minor crimes that would not typically justify such intrusive surveillance.[2, 14] Similarly, the NYPD has utilized the technology since 2008 for a range of cases from homicides to routine fraud.[14, 16]
The Culture of the Non-Disclosure Agreement (NDA)
For much of the last two decades, the proliferation of Stingrays was managed through strict Non-Disclosure Agreements (NDAs) enforced by the FBI and the primary manufacturer, Harris Corporation (now L3Harris).[11, 14, 17] These agreements prohibited local police from disclosing the existence or operation of the devices to the public, the media, defense attorneys, and even judges.[11, 17]
The implications of these NDAs for the judicial system were severe. In many cases, law enforcement officers were instructed to omit mention of the simulator in warrant applications, instead using vague language or attributing the information to a "confidential source".[17, 18, 19, 20] In some instances, prosecutors chose to dismiss criminal cases entirely rather than reveal details about the simulator's use during a trial.[1, 17, 21] This created a "parallel construction" of evidence where the technological source of a lead was obscured to avoid legal challenge.[1]
Judicial Authorization and the "Pen Register" Loophole
Historically, law enforcement agencies sought authorization for simulators under the Pen Register/Trap and Trace Statute.[14, 17, 22] This legal standard is significantly lower than the probable cause required for a search warrant; it only requires the government to show that the information sought is "relevant to an ongoing criminal investigation".[17, 22] Critics and some judges have argued that this application is technically inaccurate, as simulators do more than just record dialed numbers; they act as a real-time tracking and interception device that penetrates private spaces like homes.[1, 5, 11]
The legal tide began to shift in 2015 when the DOJ and DHS issued new policies requiring federal agents to obtain a search warrant based on probable cause before using a cell-site simulator, except in exigent circumstances.[14, 15, 21, 23] While this represented a major policy shift, it did not initially apply to state and local agencies unless they were working on a joint federal task force.[21, 23]
Criminal Exploitation and Malicious Use Cases
As the technology behind cell-site simulators has become more accessible and affordable, the threat landscape has shifted. The ability to build or buy a rogue base station is no longer limited to nation-states or well-funded police departments.
Transnational Fraud and "SMS Blasters"
One of the most prevalent criminal uses of simulator-like technology is the "SMS blaster" or "rogue base station" used for mass phishing and fraud.[13, 24] Criminal organizations, particularly those linked to Chinese organized crime, use portable devices to send bulk text messages to every phone in a crowded area.[24] These messages often contain links to fraudulent websites, malware, or social engineering schemes designed to steal banking credentials.[24] These devices are often small enough to be carried in a backpack or mounted in a vehicle, allowing criminals to target shopping malls, transit hubs, and political gatherings.[24]
Espionage and Targeted Surveillance
The discovery of rogue IMSI catchers in sensitive areas like Washington, D.C., has raised alarms regarding foreign espionage.[25, 26, 27] A 2018 study by the DHS confirmed the presence of anomalous activity consistent with simulators near the White House, foreign embassies, and other government buildings.[25, 26] These devices are likely operated by foreign intelligence services to monitor the movements and potentially the communications of U.S. lawmakers and military officials.[25, 26, 27]
In South America, the case of Henry López Londoño ("Mi Sangre") highlighted the use of simulators for extraterritorial surveillance. Colombian intelligence officers illegally brought an IMSI catcher into Argentina to track Londoño's movements without the consent of the Argentine government.[28] This case illustrates how the portability and secrecy of the technology allow it to be used in violation of international law and national sovereignty.[28]
Ethics and the Erosion of Civil Liberties
The use of cell-site simulators presents a unique ethical crisis because the technology is fundamentally indiscriminate. Unlike a traditional wiretap, which targets a specific phone line, a simulator targets the entire radio environment.[1, 8, 23]
The Digital Dragnet and Third-Party Impact
Every time a simulator is activated to find a single suspect, it forces hundreds or thousands of innocent bystanders' phones to connect to it.[1, 20, 21, 23] This "digital dragnet" collects the IMSI, location, and metadata of everyone in the vicinity, regardless of whether they are under investigation.[1, 8, 17, 23] This raises serious questions under the Fourth Amendment regarding the "particularity" of searches.[1]
Furthermore, the technology can disrupt emergency services. By jamming 3G and 4G signals to force a 2G downgrade, simulators can interfere with the ability of nearby citizens to place 911 calls or receive emergency notifications.[1, 17, 21] This physical disruption of critical infrastructure in the pursuit of surveillance is a major ethical concern for public safety advocates.[1, 21]
Surveillance of Protests and Chilling Effects
There is documented evidence of simulators being deployed at political demonstrations and protests.[8, 23, 29] For example, anomalous signals consistent with simulators were detected during anti-austerity protests in London.[29] The use of this technology at protests allows the government to identify everyone in attendance by capturing their IMSI numbers.[8, 11] This creates a "chilling effect" on the freedom of assembly and association, as citizens may fear that their presence at a political event will be permanently recorded in a government database.[8, 30]
Ethical Concern
Description
Indiscriminacy
Dragnets capture data from thousands of innocent bystanders.
Network Disruption
Potential jamming of emergency calls and 911 services.
Privacy in the Home
Signals penetrate private walls, capturing data from residents.
Chilling Effect
Identification of protesters discourages political participation.
Secrecy
Lack of transparency prevents judicial and public oversight.
Disproportionate Impact on Vulnerable Populations
Research has shown that law enforcement deployment of simulators is often concentrated in low-income communities and neighborhoods with high populations of people of color.[1] In Baltimore, a map of Stingray use overlaid with census data showed a clear disproportionate impact on African-American communities.[1] This suggests that technological surveillance may be reinforcing existing patterns of systemic bias in policing, as these communities are subjected to a higher density of "general searches" than more affluent neighborhoods.[1]
Build Your Own: The DIY IMSI Catcher and Technical Feasibility
The barrier to entry for building a cell-site simulator has dropped precipitously due to the rise of Software-Defined Radio (SDR) and the availability of open-source cellular software. What once required hundreds of thousands of dollars in proprietary hardware can now be replicated for a fraction of the cost.[6, 20, 31]
The Hardware Stack: SDR and Transceivers
A DIY simulator requires an SDR capable of duplex-mode emitting and receiving. Popular choices among researchers and hobbyists include:
• Nuand BladeRF x40: A versatile SDR used for both passive monitoring and active base station simulation.[6, 10]
• Ettus USRP: A more high-end transceiver often used in academic labs for protocol analysis.[32]
• RTL-SDR (Realtek RTL2832U): A low-cost DVB-T dongle (10−20) that can be used for passive IMSI catching by listening to the GSM paging channel.[10]
• Motorola C118: An older, programmable phone that can be flashed with custom firmware (OsmocomBB) to act as a diagnostic tool and passive IMSI sniffer.[10]
Software Ecosystems: YateBTS, OpenBTS, and Osmocom
The software handles the complex task of emulating the GSM protocol stack. YateBTS (Yet Another Telephony Engine Base Transceiver Station) and OpenBTS are the most common platforms for creating a rogue network.[6, 10] They act as the "Base Station Controller" and "Mobile Switching Center," allowing the DIY device to manage connections and identity requests.[10]
To set up a functional simulator using YateBTS and a BladeRF, the operator must configure several critical parameters:
1. MCC and MNC: The Mobile Country Code and Mobile Network Code must match a target carrier (e.g., MCC 204, MNC 16 for T-Mobile in the Netherlands).[6]
2. Channel Selection (ARFCN): The device must broadcast on a frequency that is either empty or stronger than the legitimate tower. For example, using channel 991 at 928.4 MHz.[6]
3. LAC and Cell ID: These identify the virtual tower to the phone. While specific values may not always matter, matching them to a known local tower can increase the success rate of the spoof.[6]
4. Power Level: A typical lab setup might use an output of 40 dB, which is sufficient to force connections within a two-meter radius.[6]
Technical Limitations and Failure Modes
Building a simulator in a garage is not without its challenges. Modern phones are designed to prefer faster networks (LTE/5G) over 2G.[6, 9] Therefore, a DIY simulator often fails if it cannot successfully force a downgrade. This requires the simultaneous use of a jammer or noise generator (created in GNU Radio Companion) to block the 900 MHz or 1800 MHz bands used by newer networks.[6, 9] Furthermore, the lack of a backhaul to the legitimate network means that in "local mode," the simulator can capture IMSIs but cannot route actual calls or texts to their destination, which can alert the user to a network failure.[9, 10]
Defensive Strategies and Countermeasures
In response to the threat of both state and criminal simulators, a new industry of defensive technology has emerged, alongside new security features in mobile operating systems.
Native OS Protections: Android 16 and Hardware Requirements
Google has announced significant security updates for Android 16 (expected late 2025/2026) that aim to provide users with transparency regarding their network connection.[20] These features include:
• Network Notifications: Alerting the user when a network requests their IMEI or IMSI, or when a connection is unencrypted.[20]
• Mobile Network Security Log: A centralized log within the Android Safety Center where users can view history of suspicious signal activity.[20]
• The 2G Toggle: A feature allowing users to disable 2G connectivity entirely, which effectively neutralizes most downgrade attacks.[20]
Crucially, these features require a specific hardware abstraction layer—IRadio HAL 3.0—which is not present in most current hardware, including the Pixel 9 series.[20] This means that while the software exists, it will take several hardware refresh cycles before these protections are widespread among the general population.[20]
Physical Countermeasures: Faraday Bags
For users who require immediate protection, signal blocking through physical means remains the most effective solution. Faraday bags, lined with conductive materials like nickel and copper, block all radio frequencies between 600 MHz and 6 GHz.[4] By placing a phone in a Faraday bag, the device becomes invisible to both legitimate towers and simulators, preventing any location tracking or identifier capture while the device is inside.[4]
Research-Grade Detection: SeaGlass and SnoopSnitch
Academic researchers have developed more sophisticated tools for detecting simulators in the wild. The SeaGlass project, developed at the University of Washington, uses a network of sensors (often installed in ridesharing vehicles) to map the "normal" cellular landscape of a city.[33] By identifying anomalies—such as a tower that appears in a location where none existed before, or a tower with a configuration that changes rapidly—SeaGlass can pinpoint the likely location of active simulators.[33] Apps like SnoopSnitch provide a similar function for individual users by monitoring signaling traffic, though their effectiveness is limited by the level of access the Android OS provides to the phone's baseband processor.[4]
The Future of Cellular Privacy: Legislative and Judicial Trends
As of 2026, the legislative landscape is moving toward stricter regulation of cell-site simulators, spurred by public pressure and the exposure of the secrecy NDAs.
The Cell-Site Simulator Warrant Act of 2025
Introduced by a bipartisan group of senators, including Ron Wyden, the Cell-Site Simulator Warrant Act of 2025 (S. 2522) represents the most significant federal attempt to curb the unregulated use of Stingrays.[34, 35, 36] The bill aims to:
1. Mandate Warrants: Require a probable cause warrant for any use of a simulator by a law enforcement agency within the U.S..[35, 37]
2. Impose Penalties: Establish a fine of up to $250,000 for the unauthorized use of a simulator by individuals or entities.[37, 38]
3. Minimization and Deletion: Require the immediate deletion of any information captured from non-target devices.[35, 37]
4. Transparency: End the use of NDAs that prevent police from being honest with judges about the technology being used.[17, 35]
State
Legislative/Judicial Status on Cell-Site Simulators
California
Warrant required by law (CalECPA).
Virginia
Warrant required; prohibits "fishing expeditions."
Washington
Warrant required; strict reporting mandates.
New York
Pending S6567/A2461 would prohibit use entirely.
Illinois
Warrant required; data must be purged within 24-72 hours.
The Supreme Court and the "Chatrie" Case
The 2026 Supreme Court case Chatrie v. United States is expected to be a landmark for digital location privacy.[39, 40, 41] While specifically addressing "geofence warrants," the Court's ruling on whether a citizen has a reasonable expectation of privacy in their location data as tracked by third parties will directly impact the legality of the simulator "dragnet".[39, 40] If the Court determines that mass, de-identified location tracking constitutes an unreasonable search, it will provide a powerful precedent for suppressing evidence obtained through the warrantless use of cell-site simulators.[39, 41]
Conclusions: The Signal and the Noise
The cell-site simulator occupies a unique and dangerous position in the modern surveillance apparatus. Its ability to exploit the fundamental protocols of human communication makes it an almost uniquely powerful tool for both security and oppression. The history of the "Stingray" is one of extreme secrecy, institutional overreach, and a slow, painful awakening by the judicial and legislative branches.
As we move into an era of 5G and 6G connectivity, the technical vulnerabilities of cellular networks will continue to exist as long as backward compatibility remains a requirement. The democratization of these tools means that the threat is no longer just "Big Brother" but any sufficiently motivated criminal actor with a few hundred dollars of hardware. The response must be multi-faceted: technological defenses built into every handset, physical shielding for those at high risk, and a robust legal framework that recognizes that a person's real-time location and identity are among their most sensitive pieces of property. Without these protections, the cellular network—the very tool that connects our modern world—will remain an open window through which anyone can watch.
--------------------------------------------------------------------------------
1. Cell-Site Simulators/ IMSI Catchers - Street Level Surveillance, https://sls.eff.org/technologies/cell-site-simulators-imsi-catchers
2. IMSI Hacking: Understanding Mobile Network Vulnerabilities - Startup Defense, https://www.startupdefense.io/cyberattacks/imsi-hacking
3. Detecting IMSI-Catchers by Characterizing Identity Exposing Messages in Cellular Traffic - NDSS Symposium, https://www.ndss-symposium.org/wp-content/uploads/2025-1115-paper.pdf
4. How IMSI Catchers, Like Stingrays, Track Your Location - GoDark Faraday Bags, https://godarkbags.com/blogs/post/imsi-catchers
5. Stingrays - ACLU of Wisconsin, https://www.aclu-wi.org/stingrays/
6. The effectiveness of a homemade IMSI catcher build with YateBTS ..., https://rp.os3.nl/2015-2016/p86/report.pdf
7. IMSI Catcher | Mobile Security Glossary - Zimperium, https://zimperium.com/glossary/imsi-catcher
8. IMSI catchers legal analysis - Privacy International, https://www.privacyinternational.org/sites/default/files/2020-06/IMSI%20catchers%20legal%20analysis.pdf
9. IMSI-catcher - Wikipedia, https://en.wikipedia.org/wiki/IMSI-catcher
10. Remaking an IMSI catcher - ArODES HES-SO, https://arodes.hes-so.ch/record/5207/files/Goguey_2019_remaking_an_imsi_catcher.pdf
11. Stingray phone tracker - Wikipedia, https://en.wikipedia.org/wiki/Stingray_phone_tracker
12. An Overview of Security Attacks in 5G Enabled Technologies: Applications and Use Case Scenarios, https://www.isecure-journal.com/article_183513_fd25ffcf6a02b4cc068f2fe0f26bf0d3.pdf
13. How the SNI5GECT attack on 5G connectivity works, and how it threatens subscribers | Kaspersky official blog, https://www.kaspersky.com/blog/5g-attack-downgrade-sni5gect/54258/
14. Stingray use in United States law enforcement - Wikipedia, https://en.wikipedia.org/wiki/Stingray_use_in_United_States_law_enforcement
15. Law Enforcement Use of Cell-Site Simulation Technologies: Privacy Concerns and Recommendations - CORD, https://www.cord-levin-center.org/bitstreams/65c54b55-da5f-4031-a66e-eff925707c9c/download
16. CELL-SITE SIMULATORS: IMPACT AND USE POLICY - NYC.gov, https://www.nyc.gov/assets/nypd/downloads/pdf/public_information/post-final/cell-site-simulators-nypd-Impact-and-use-policy_11.24.23.pdf
17. Federal Recommendations on the Use of Cell Site Simulators | ACLU, https://www.aclu.org/sites/default/files/field_document/aclu_recommendations_on_the_use_of_cell_phone_simulators.pdf
18. Illinois Should Regulate the Government's use of “Stingray” Technology - Chicago Appleseed Center for Fair Courts, http://www.chicagoappleseed.org/wp-content/uploads/2017/02/4-1-16-CCL-stingray-PS.pdf
19. ACLU raises questions about invasive cell phone trackers Stingrays, https://www.aclum.org/aclu-raises-questions-about-invasive-cell-phone-trackers-stingrays/
20. Android's new Stingray detection could revolutionize phone security ..., https://android.gadgethacks.com/how-to/androids-new-stingray-detection-could-revolutionize-phone-security-but-your-current-device-wont-support-it/
21. Stingray Searches and the Fourth Amendment Implications of Modern Cellular Surveillance - Georgetown Law, https://www.law.georgetown.edu/american-criminal-law-review/wp-content/uploads/sites/15/2023/02/53-0-McCullough-stingray-searches-and-the-fourth-amendment-implications-of-modern-cellular-surveillance.pdf
22. StingRay Technology and Reasonable Expectations of Privacy in the Internet of Everything, https://fedsoc.org/fedsoc-review/stingray-technology-and-reasonable-expectations-of-privacy-in-the-internet-of-everything
23. Stingray Cell Phone Tracking & Federal Surveillance: How Cell Site Simulators Impact Your Fourth Amendment Rights, Privacy, and Criminal Defense - Spodek Law Group, https://www.nyccriminalattorneys.com/stingray-cell-phone-tracking/
24. Financial Times Documentary Explains Cybercrime, IMSI-Catchers ..., https://commsrisk.com/financial-times-documentary-explains-cybercrime-as-a-service-imsi-catchers-and-scam-compounds/
25. Telecom spying devices found near White House, other DC-area sites, DHS official says, https://www.foxnews.com/politics/telecom-spying-devices-found-near-white-house-other-dc-area-sites-dhs-official-says
26. Homeland Security has detected phone spying devices in DC - CNET, https://www.cnet.com/news/politics/homeland-security-detected-phone-spying-devices-in-dc/
27. Confirmed: Hidden Phone Tracking Devices Found Around Washington D.C. - SecureWorld, https://www.secureworld.io/industry-news/phone-tracking-devices-found
28. IMSI Catch 22: Understanding the Role of Spying Equipment in the Mi Sangre Case, https://medium.com/@privacyint/imsi-catch-22-understanding-the-role-of-spying-equipment-in-the-mi-sangre-case-23c27a001f7c
29. VICE News Investigation Finds Signs of Secret Phone Surveillance Across London, https://www.vice.com/en/article/vice-news-investigation-finds-signs-of-secret-phone-surveillance-across-london/
30. IMSI catchers legal analysis - Privacy International, https://privacyinternational.org/sites/default/files/2020-06/IMSI%20catchers%20legal%20analysis.pdf
31. WiFi-Based IMSI Catcher - Black Hat, https://blackhat.com/docs/eu-16/materials/eu-16-OHanlon-WiFi-IMSI-Catcher.pdf
32. Stingray Device for Cyber-Surveillance using a Software-Defined Radio as an IMSI Catcher, https://www.ijraset.com/research-paper/stingray-device-for-cyber-surveillance-using-a-software-defined-radio
33. Catching the IMSI-catchers: SeaGlass brings transparency to cell phone surveillance – UW News, https://www.washington.edu/news/2017/06/02/catching-the-imsi-catchers-seaglass-brings-transparency-to-cell-phone-surveillance/
34. S.2522 - Cell-Site Simulator Warrant Act of 2025 119th Congress (2025-2026), https://www.congress.gov/bill/119th-congress/senate-bill/2522
35. Cell-Site Simulator Warrant Act of 2025 - Codify Updates, https://codifyupdates.com/bill-details/us-cell-site-simulator-warrant-act-of-2025-1
36. All Info - S.2522 - 119th Congress (2025-2026): Cell-Site Simulator Warrant Act of 2025, https://www.congress.gov/bill/119th-congress/senate-bill/2522/all-info
37. Text - S.2522 - 119th Congress (2025-2026): Cell-Site Simulator Warrant Act of 2025, https://www.congress.gov/bill/119th-congress/senate-bill/2522/text
38. Text - H.R.6194 - 118th Congress (2023-2024): Cell-Site Simulator Warrant Act of 2023, https://www.congress.gov/index.php/bill/118th-congress/house-bill/6194/text
39. Supreme Court agrees to hear a Fourth Amendment case regarding geofence warrants, https://www.brookings.edu/articles/supreme-court-agrees-to-hear-a-fourth-amendment-case-regarding-geofence-warrants/
40. Supreme Court to Address Constitutionality of Geofence Warrants for the First Time, https://www.paulweiss.com/insights/client-memos/supreme-court-to-address-constitutionality-of-geofence-warrants-for-the-first-time
41. Supreme Court takes up four new cases, including disputes on geofence warrants and Roundup weedkiller - SCOTUSblog, https://www.scotusblog.com/2026/01/supreme-court-takes-up-four-new-cases-including-disputes-on-geofence-warrants-and-roundup-weedkiller/