import jsPDF from "jspdf"

// CV Content - Updated with your actual CV content
export const createCVContent = () => {
  return `Samuel Ogunware
samuelogunware@gmail.com — +44 7368 696235 — Harpenden, UK
LinkedIn: www.linkedin.com/in/samuel-ogunware-74b6b1355

SUMMARY
Computer Science Graduate with strong foundations in Python, Java, and data analysis. Experienced in web development, NLP, blockchain systems, and e-commerce operations. Demonstrated ability to build end-to-end technical solutions, analyse complex systems, and contribute to business growth. Seeking an entry-level role where I can apply my technical expertise.

EDUCATION
University of East Anglia                                                Sep 2022 – Jun 2025
BSc Computer Science – 2:1 (Upper Second-Class Honours)
Key areas: AI, Advanced Web Development, Data Science, Software Engineering, Databases

St George's School, Harpenden                                           Sep 2015 – Sep 2022
A-Levels: Computer Science, Business, Graphic Communication
10 GCSEs grade 6 or above, including Mathematics and English

PROJECTS
AI Train Chatbot                                                        Apr 2025
Created an AI chatbot that helps users find the cheapest UK train tickets and check real-time delays using web scraping and NLP.
– Used Selenium to scrape live fare and schedule data from rail websites.
– Implemented a natural language processing module to interpret user queries about delays, prices, and routes with over 90% accuracy.
– Delivered accurate and dynamic travel information to enhance user experience.
Technologies: Python, Selenium, NLP, JavaScript

Final Year Dissertation: Cryptocurrency Optimisation                    May 2025
Awarded First-Class for research on optimising cryptocurrency systems for performance and energy efficiency.
– Analysed system requirements including RAM, CPU, and GPU impacts on blockchain consensus.
– Investigated algorithms to improve transaction throughput and reduce energy consumption.
– Explored compliance with blockchain trilemma, sustainability goals, and regulations.
Technologies: Python, Blockchain concepts, Performance analysis

EXPERIENCE
Founder – Shopify E-commerce Business                                   Jul 2023 – Dec 2024
– Built and scaled a profitable e-commerce business, achieving five-figure revenues within the first 18 months.
– Managed product sourcing, shipping, customer support, and returns.
– Engineered a 40% increase in organic traffic by implementing on-page and technical SEO strategies.
– Designed and optimised the Shopify storefront with improved layout and SEO.
– Automated inventory tracking with Python scripts, reducing stock errors by 20%

Business Analyst Intern – Luton, UK                                     Jul 2021 - Aug 2021
– Analysed large sets of financial and operational data to identify key business trends.
– Developed Excel dashboards that cut financial reporting time by 20%.
– Documented business requirements to support cross-team collaboration.
– Assisted in system testing to ensure accurate financial reporting.

Stock Replenishment Assistant – Waitrose                                Mar 2021 – Sep 2022
– Maintained stock levels and ensured accurate product availability.
– Assisted customers with locating items and providing product support.
– Organised inventory and contributed to faster shelf restocking.

TECHNICAL SKILLS
Languages: Python, Java, JavaScript (Node.js, React), SQL, HTML, CSS
Tools: Selenium, Git, Shopify, Microsoft Office, Excel, Flask, FastAPI, NumPy
Concepts: Blockchain, Data Analysis, Web Development, Algorithms, NLP, Machine Learning, Agile

INTERESTS
Basketball, Programming, Football, Reading, Cooking, Running`
}

// Updated functions for GitHub-hosted PDFs
export const downloadActualDissertation = () => {
  // GitHub raw URL for your dissertation PDF
  const pdfUrl =
    "https://raw.githubusercontent.com/samuelogunware/portfolio-documents/main/Samuel_Ogunware_Cryptocurrency_Dissertation.pdf"

  const link = document.createElement("a")
  link.href = pdfUrl
  link.download = "Samuel_Ogunware_Full_Dissertation.pdf"
  link.target = "_blank"
  link.rel = "noopener noreferrer"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const downloadActualCV = () => {
  // GitHub raw URL for your CV PDF
  const pdfUrl = "https://raw.githubusercontent.com/samuelogunware/portfolio-documents/main/Samuel_Ogunware_CV.pdf"

  const link = document.createElement("a")
  link.href = pdfUrl
  link.download = "Samuel_Ogunware_CV.pdf"
  link.target = "_blank"
  link.rel = "noopener noreferrer"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Generate CV PDF from your actual content
export const generateCVPDF = () => {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.width
  const margin = 20
  const lineHeight = 6
  let yPosition = margin

  // Helper function to add text with word wrapping
  const addText = (text: string, fontSize = 10, isBold = false, isTitle = false) => {
    doc.setFontSize(fontSize)
    if (isBold) {
      doc.setFont("helvetica", "bold")
    } else {
      doc.setFont("helvetica", "normal")
    }

    if (isTitle) {
      doc.setTextColor(0, 123, 255) // Blue color for titles
    } else {
      doc.setTextColor(0, 0, 0) // Black for normal text
    }

    const lines = doc.splitTextToSize(text, pageWidth - 2 * margin)

    // Check if we need a new page
    if (yPosition + lines.length * lineHeight > doc.internal.pageSize.height - margin) {
      doc.addPage()
      yPosition = margin
    }

    doc.text(lines, margin, yPosition)
    yPosition += lines.length * lineHeight + (isTitle ? 5 : 2)
  }

  // Header
  addText("SAMUEL OGUNWARE", 18, true, true)
  addText("Computer Science Graduate", 12, false)
  addText("samuelogunware@gmail.com | +44 7368 696235 | Harpenden, UK", 10, false)
  addText("LinkedIn: www.linkedin.com/in/samuel-ogunware-74b6b1355", 10, false)

  yPosition += 10

  // Summary
  addText("SUMMARY", 14, true, true)
  addText(
    "Computer Science Graduate with strong foundations in Python, Java, and data analysis. Experienced in web development, NLP, blockchain systems, and e-commerce operations. Demonstrated ability to build end-to-end technical solutions, analyse complex systems, and contribute to business growth. Seeking an entry-level role where I can apply my technical expertise.",
    10,
    false,
  )

  yPosition += 5

  // Education
  addText("EDUCATION", 14, true, true)
  addText("University of East Anglia                                                Sep 2022 – Jun 2025", 11, true)
  addText("BSc Computer Science – 2:1 (Upper Second-Class Honours)", 10, false)
  addText("Key areas: AI, Advanced Web Development, Data Science, Software Engineering, Databases", 10, false)

  yPosition += 3

  addText("St George's School, Harpenden                                           Sep 2015 – Sep 2022", 11, true)
  addText("A-Levels: Computer Science, Business, Graphic Communication", 10, false)
  addText("10 GCSEs grade 6 or above, including Mathematics and English", 10, false)

  yPosition += 5

  // Projects
  addText("PROJECTS", 14, true, true)
  addText("AI Train Chatbot                                                        Apr 2025", 11, true)
  addText(
    "Created an AI chatbot that helps users find the cheapest UK train tickets and check real-time delays using web scraping and NLP.",
    10,
    false,
  )
  addText("• Used Selenium to scrape live fare and schedule data from rail websites.", 10, false)
  addText(
    "• Implemented a natural language processing module to interpret user queries about delays, prices, and routes with over 90% accuracy.",
    10,
    false,
  )
  addText("• Delivered accurate and dynamic travel information to enhance user experience.", 10, false)
  addText("Technologies: Python, Selenium, NLP, JavaScript", 10, false)

  yPosition += 3

  addText("Final Year Dissertation: Cryptocurrency Optimisation                    May 2025", 11, true)
  addText(
    "Awarded First-Class for research on optimising cryptocurrency systems for performance and energy efficiency.",
    10,
    false,
  )
  addText("• Analysed system requirements including RAM, CPU, and GPU impacts on blockchain consensus.", 10, false)
  addText("• Investigated algorithms to improve transaction throughput and reduce energy consumption.", 10, false)
  addText("• Explored compliance with blockchain trilemma, sustainability goals, and regulations.", 10, false)
  addText("Technologies: Python, Blockchain concepts, Performance analysis", 10, false)

  yPosition += 5

  // Experience
  addText("EXPERIENCE", 14, true, true)
  addText("Founder – Shopify E-commerce Business                                   Jul 2023 – Dec 2024", 11, true)
  addText(
    "• Built and scaled a profitable e-commerce business, achieving five-figure revenues within the first 18 months.",
    10,
    false,
  )
  addText("• Managed product sourcing, shipping, customer support, and returns.", 10, false)
  addText(
    "• Engineered a 40% increase in organic traffic by implementing on-page and technical SEO strategies.",
    10,
    false,
  )
  addText("• Designed and optimised the Shopify storefront with improved layout and SEO.", 10, false)
  addText("• Automated inventory tracking with Python scripts, reducing stock errors by 20%", 10, false)

  yPosition += 3

  addText("Business Analyst Intern – Luton, UK                                     Jul 2021 - Aug 2021", 11, true)
  addText("• Analysed large sets of financial and operational data to identify key business trends.", 10, false)
  addText("• Developed Excel dashboards that cut financial reporting time by 20%.", 10, false)
  addText("• Documented business requirements to support cross-team collaboration.", 10, false)
  addText("• Assisted in system testing to ensure accurate financial reporting.", 10, false)

  yPosition += 3

  addText("Stock Replenishment Assistant – Waitrose                                Mar 2021 – Sep 2022", 11, true)
  addText("• Maintained stock levels and ensured accurate product availability.", 10, false)
  addText("• Assisted customers with locating items and providing product support.", 10, false)
  addText("• Organised inventory and contributed to faster shelf restocking.", 10, false)

  yPosition += 5

  // Technical Skills
  addText("TECHNICAL SKILLS", 14, true, true)
  addText("Languages: Python, Java, JavaScript (Node.js, React), SQL, HTML, CSS", 10, false)
  addText("Tools: Selenium, Git, Shopify, Microsoft Office, Excel, Flask, FastAPI, NumPy", 10, false)
  addText("Concepts: Blockchain, Data Analysis, Web Development, Algorithms, NLP, Machine Learning, Agile", 10, false)

  yPosition += 5

  // Interests
  addText("INTERESTS", 14, true, true)
  addText("Basketball, Programming, Football, Reading, Cooking, Running", 10, false)

  return doc
}

// Generate comprehensive dissertation PDF from your actual content
export const generateFullDissertationPDF = () => {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.width
  const margin = 20
  const lineHeight = 6
  let yPosition = margin

  // Helper function to add text with word wrapping
  const addText = (text: string, fontSize = 10, isBold = false, isTitle = false, isHeader = false) => {
    doc.setFontSize(fontSize)
    if (isBold || isHeader) {
      doc.setFont("helvetica", "bold")
    } else {
      doc.setFont("helvetica", "normal")
    }

    if (isTitle || isHeader) {
      doc.setTextColor(0, 123, 255) // Blue color for titles
    } else {
      doc.setTextColor(0, 0, 0) // Black for normal text
    }

    const lines = doc.splitTextToSize(text, pageWidth - 2 * margin)

    // Check if we need a new page
    if (yPosition + lines.length * lineHeight > doc.internal.pageSize.height - margin) {
      doc.addPage()
      yPosition = margin
    }

    doc.text(lines, margin, yPosition)
    yPosition += lines.length * lineHeight + (isTitle ? 8 : isHeader ? 5 : 2)
  }

  // Title Page
  addText("CRYPTOCURRENCY OPTIMISATION", 20, true, true)
  yPosition += 5
  addText("Mide Ogunware", 16, true)
  addText("Registration number 100382520", 12, false)
  addText("2025", 12, false)
  yPosition += 10
  addText("Supervised by Rameez Asif", 12, false)
  addText("University of East Anglia", 12, false)
  addText("Faculty of Science", 12, false)
  addText("School of Computing Sciences", 12, false)

  yPosition += 20

  // Abstract
  addText("ABSTRACT", 16, true, true)
  addText(
    "The rapid growth of cryptocurrency has brought significant attention to the performance, scalability, and environmental sustainability of different blockchain networks. My dissertation is going to explore cryptocurrency optimisation through a holistic lens, I am going to be evaluating the hardware and software requirements, consensus mechanisms, transaction throughput and energy consumption of major blockchain protocols. Using a data driven approach, key metrics were collected and analysed through custom-built benchmarking scripts to assess the resource demands and transaction performance of networks including Bitcoin, Ethereum, Solana and smaller networks. Consensus algorithms such as Proof of Work, Proof of Stake and Proof of History are compared in terms of efficiency, security and infrastructure requirements. Findings indicate that while PoW remains the most secure, it incurs a high energy cost relative to its transaction output. PoS and PoH offer promising alternatives with improved energy efficiency and transaction scalability, with trade-offs in hardware dependency and decentralisation. The results highlight opportunities for optimisation in system architecture and consensus logic, informing future developments in sustainable and high-performance blockchain networks.",
    10,
    false,
  )

  yPosition += 10

  // Acknowledgements
  addText("ACKNOWLEDGEMENTS", 16, true, true)
  addText(
    "I am sincerely thankful to my supervisor, Mr. Rameez Asif, who's guidance and consistent support whenever i needed were invaluable throughout the course of my project. His expertise in the field of computer science and blockchains helped shape the direction and depth of my research alot.",
    10,
    false,
  )

  yPosition += 10

  // Key Findings Section
  addText("KEY RESEARCH FINDINGS", 16, true, true)

  addText("System Requirements Analysis:", 12, true, false, true)
  addText("• Bitcoin: 4-8 GB RAM, minimal hardware requirements", 10, false)
  addText("• Ethereum: 16 GB RAM, moderate validator requirements", 10, false)
  addText("• Solana: 128+ GB RAM, enterprise-grade hardware demands", 10, false)

  yPosition += 5

  addText("Energy Consumption per Transaction:", 12, true, false, true)
  addText("• Bitcoin (PoW): 0.251 kWh per transaction", 10, false)
  addText("• Ethereum (PoS): 0.0002 kWh per transaction", 10, false)
  addText("• Solana (PoH): 0.000012 kWh per transaction", 10, false)

  yPosition += 5

  addText("Transaction Throughput:", 12, true, false, true)
  addText("• Bitcoin: ~7 TPS", 10, false)
  addText("• Ethereum: ~15 TPS", 10, false)
  addText("• Solana: ~2,000 TPS (real-world conditions)", 10, false)

  yPosition += 10

  // Blockchain Trilemma Analysis
  addText("BLOCKCHAIN TRILEMMA ANALYSIS", 16, true, true)

  addText("Bitcoin (PoW):", 12, true, false, true)
  addText("• Security: High (5/5)", 10, false)
  addText("• Scalability: Low (2/5)", 10, false)
  addText("• Decentralisation: High (5/5)", 10, false)

  yPosition += 3

  addText("Ethereum (PoS):", 12, true, false, true)
  addText("• Security: High (4/5)", 10, false)
  addText("• Scalability: Moderate (4/5)", 10, false)
  addText("• Decentralisation: High (4/5)", 10, false)

  yPosition += 3

  addText("Solana (PoH + PoS):", 12, true, false, true)
  addText("• Security: Moderate (3/5)", 10, false)
  addText("• Scalability: Very High (5/5)", 10, false)
  addText("• Decentralisation: Low-Moderate (2/5)", 10, false)

  yPosition += 10

  // Methodology
  addText("METHODOLOGY", 16, true, true)
  addText("The research employed:", 10, false)
  addText("• Custom Python benchmarking scripts", 10, false)
  addText("• Real-time blockchain API data collection", 10, false)
  addText("• Virtual machine simulations for hardware testing", 10, false)
  addText("• Statistical analysis including t-tests for significance", 10, false)
  addText("• Comparative analysis across consensus mechanisms", 10, false)

  yPosition += 10

  // Key Code Sample
  addText("SAMPLE BENCHMARKING CODE", 16, true, true)
  addText("Energy Consumption Estimation Script:", 12, true, false, true)

  // Add code in a monospace-like format
  doc.setFont("courier", "normal")
  doc.setFontSize(8)
  addText("def estimate_energy_per_transaction(power_watts, block_time_sec, tx_per_block):", 8, false)
  addText("    energy_kwh = (power_watts * block_time_sec) / (3600 * tx_per_block)", 8, false)
  addText("    return round(energy_kwh, 6)", 8, false)
  addText("", 8, false)
  addText("bitcoin = estimate_energy_per_transaction(3010, 600, 2000)", 8, false)
  addText("ethereum = estimate_energy_per_transaction(90, 12, 150)", 8, false)
  addText("solana = estimate_energy_per_transaction(220, 0.4, 2000)", 8, false)

  // Reset font
  doc.setFont("helvetica", "normal")

  yPosition += 10

  // Conclusion
  addText("CONCLUSION", 16, true, true)
  addText(
    "This research demonstrates that consensus algorithm choice is the most influential factor in determining blockchain performance and energy efficiency. While no single blockchain perfectly satisfies the trilemma, Ethereum post-Merge offers the most balanced approach. Solana showcases the potential of modern consensus mechanisms but at the cost of accessibility. The findings inform future developments in sustainable and high-performance blockchain networks.",
    10,
    false,
  )

  yPosition += 10

  // Future Work
  addText("FUTURE WORK", 16, true, true)
  addText("Building upon these findings, future research could explore:", 10, false)
  addText("• Real hardware testbeds for more accurate benchmarking", 10, false)
  addText("• Layer 2 and hybrid protocol efficiency analysis", 10, false)
  addText("• Renewable energy integration studies", 10, false)
  addText("• Network emulation and stress testing", 10, false)
  addText("• AI-driven optimisation techniques", 10, false)

  yPosition += 10

  // Contact
  addText("COMPLETE DISSERTATION AVAILABLE", 14, true, true)
  addText(
    "This PDF contains the core findings and methodology. The complete 45-page dissertation with full literature review, detailed statistical analysis, comprehensive references, and all benchmarking scripts is available upon request.",
    10,
    false,
  )
  addText("Contact: samuelogunware@gmail.com", 11, true)

  return doc
}

export const downloadPDF = (doc: jsPDF, filename: string) => {
  doc.save(filename)
}
