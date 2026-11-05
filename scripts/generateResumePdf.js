import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
  const { width, height } = page.getSize();

  // Authentic Academic / LaTeX Times-Roman Typography
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const primaryColor = rgb(0, 0, 0); // Crisp Black
  const ruleColor = rgb(0, 0, 0);    // Crisp Black Divider Rule

  const margin = 42;
  const contentWidth = width - margin * 2;
  let y = height - 42;

  // Header: Name (Centered, Bold)
  const nameText = 'NARESH NALLANI';
  const nameWidth = fontBold.widthOfTextAtSize(nameText, 21);
  page.drawText(nameText, {
    x: (width - nameWidth) / 2,
    y: y,
    size: 21,
    font: fontBold,
    color: primaryColor,
  });

  // Role (Centered)
  const roleText = 'Java Backend Developer (fresher)';
  const roleWidth = fontRegular.widthOfTextAtSize(roleText, 11);
  page.drawText(roleText, {
    x: (width - roleWidth) / 2,
    y: y - 16,
    size: 11,
    font: fontRegular,
    color: primaryColor,
  });

  // Contact Info Row 1 (Centered)
  const contactText1 = '+91-6304677902   |   nallaninaresh15@gmail.com   |   linkedin.com/in/nallaninaresh';
  const contact1Width = fontRegular.widthOfTextAtSize(contactText1, 8.5);
  page.drawText(contactText1, {
    x: (width - contact1Width) / 2,
    y: y - 29,
    size: 8.5,
    font: fontRegular,
    color: primaryColor,
  });

  // Contact Info Row 2 (Centered)
  const contactText2 = 'github.com/nallaninaresh   |   portfolio.com';
  const contact2Width = fontRegular.widthOfTextAtSize(contactText2, 8.5);
  page.drawText(contactText2, {
    x: (width - contact2Width) / 2,
    y: y - 40,
    size: 8.5,
    font: fontRegular,
    color: primaryColor,
  });

  y -= 56;

  // Section divider helper
  function drawSectionTitle(title) {
    page.drawText(title, {
      x: margin,
      y: y,
      size: 11,
      font: fontBold,
      color: primaryColor,
    });
    page.drawLine({
      start: { x: margin, y: y - 3 },
      end: { x: width - margin, y: y - 3 },
      thickness: 0.8,
      color: ruleColor,
    });
    y -= 14;
  }

  // Text wrapper helper
  function drawWrappedText(text, x, maxWidth, size = 9, font = fontRegular, color = primaryColor, lineHeight = 11.5) {
    const words = text.split(' ');
    let line = '';
    for (let i = 0; i < words.length; i++) {
      const testLine = line + (line ? ' ' : '') + words[i];
      const textWidth = font.widthOfTextAtSize(testLine, size);
      if (textWidth > maxWidth && line !== '') {
        page.drawText(line, { x, y, size, font, color });
        y -= lineHeight;
        line = words[i];
      } else {
        line = testLine;
      }
    }
    if (line) {
      page.drawText(line, { x, y, size, font, color });
      y -= lineHeight;
    }
  }

  // 1. CAREER OBJECTIVE
  drawSectionTitle('Career Objective');
  const objective = "To obtain an entry-level position as a Java BackEnd Developer where I can apply my knowledge of Core Java, Spring Boot, REST APIs, MySQL, Spring JPA, JavaScript to develop reliable and user-friendly web applications. Eager to contribute to real-world projects, enhance my technical expertise, and grow as a software developer while contributing to organizational success.";
  drawWrappedText(objective, margin, contentWidth, 8.8, fontRegular, primaryColor, 11);
  y -= 6;

  // 2. SKILLS
  drawSectionTitle('Skills');
  const skillsList = [
    { label: 'Programming Languages', val: 'Java, SQL, JavaScript' },
    { label: 'Frameworks', val: 'Spring Boot, Spring MVC, Hibernate, JPA, Servlets, JSP' },
    { label: 'Databases', val: 'MySQL, OracleSQL' },
    { label: 'Developer Tools', val: 'Git, GitHub, Maven, Postman, Eclipse, Tomcat' },
    { label: 'Core Concepts', val: 'REST APIs, JDBC, OOP, Collections, Multithreading, JWT Authentication' }
  ];

  skillsList.forEach(item => {
    page.drawText(`${item.label}: `, { x: margin, y: y, size: 8.8, font: fontBold, color: primaryColor });
    const labelWidth = fontBold.widthOfTextAtSize(`${item.label}: `, 8.8);
    page.drawText(item.val, { x: margin + labelWidth, y: y, size: 8.8, font: fontRegular, color: primaryColor });
    y -= 12;
  });
  y -= 6;

  // 3. PROJECTS
  drawSectionTitle('Projects');

  // Project 1: ReUseHub
  page.drawText('ReUseHub: Sustainable Item Exchange Platform', {
    x: margin,
    y: y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  const p1Tech = '—  Java, Spring Boot, React.js, MySQL     2025';
  const p1TechWidth = fontRegular.widthOfTextAtSize(p1Tech, 8.5);
  page.drawText(p1Tech, {
    x: width - margin - p1TechWidth,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: primaryColor,
  });
  y -= 11.5;

  const p1Bullets = [
    "Designed and developed a full-stack item donation and exchange platform capable of handling real-time listings, categories, and automated reservation workflows for hundreds of concurrent users.",
    "Improved API response throughput by approximately 45% and reduced database query latency by implementing B-tree indexing and optimized REST endpoints.",
    "Implemented transactional database locking and ACID-compliant state machines to eliminate race conditions and prevent duplicate claims during simultaneous user requests.",
    "Built responsive user and admin tracking dashboards in React.js featuring real-time status transitions, dynamic search filtering, and inventory managers, cutting page render time by 35%."
  ];

  p1Bullets.forEach(b => {
    page.drawText('•', { x: margin + 6, y: y, size: 9, font: fontBold, color: primaryColor });
    drawWrappedText(b, margin + 16, contentWidth - 16, 8.5, fontRegular, primaryColor, 10.8);
  });
  y -= 4;

  // Project 2: TalentTrack
  page.drawText('TalentTrack Job Portal System', {
    x: margin,
    y: y,
    size: 9.5,
    font: fontBold,
    color: primaryColor,
  });
  const p2Tech = '—  Java, Spring Boot, React.js, Hibernate     2025';
  const p2TechWidth = fontRegular.widthOfTextAtSize(p2Tech, 8.5);
  page.drawText(p2Tech, {
    x: width - margin - p2TechWidth,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: primaryColor,
  });
  y -= 11.5;

  const p2Bullets = [
    "Designed and built a two-sided recruitment platform connecting job seekers with recruiters through structured candidate screening and applicant tracking workflows.",
    "Improved search filter efficiency by approximately 35% using normalized schema architectures and Hibernate ORM relational mappings (@OneToMany, @ManyToOne).",
    "Implemented Role-Based Access Control (RBAC) and secure authentication guards to separate Candidate application flows from Recruiter administrative endpoints.",
    "Built modular pipeline tracking interfaces in React.js allowing real-time stage updates (Applied -> Shortlisted -> Interview -> Decision) with automated notification triggers."
  ];

  p2Bullets.forEach(b => {
    page.drawText('•', { x: margin + 6, y: y, size: 9, font: fontBold, color: primaryColor });
    drawWrappedText(b, margin + 16, contentWidth - 16, 8.5, fontRegular, primaryColor, 10.8);
  });
  y -= 6;

  // 4. EDUCATION
  drawSectionTitle('Education');

  // B.Tech
  page.drawText('Bachelor of Technology (B.Tech)', { x: margin, y: y, size: 9, font: fontBold, color: primaryColor });
  const btechYear = '2022 – 2026';
  page.drawText(btechYear, { x: width - margin - fontRegular.widthOfTextAtSize(btechYear, 9), y: y, size: 9, font: fontRegular, color: primaryColor });
  y -= 11;
  page.drawText('Anantha Lakshmi Institute of Technology and Sciences', { x: margin, y: y, size: 8.5, font: fontItalic, color: primaryColor });
  const cgpaText = 'CGPA : 8.3/10';
  page.drawText(cgpaText, { x: width - margin - fontItalic.widthOfTextAtSize(cgpaText, 8.5), y: y, size: 8.5, font: fontItalic, color: primaryColor });
  y -= 13;

  // Intermediate
  page.drawText('Intermediate (MPC)', { x: margin, y: y, size: 9, font: fontBold, color: primaryColor });
  const interYear = '2020 – 2022';
  page.drawText(interYear, { x: width - margin - fontRegular.widthOfTextAtSize(interYear, 9), y: y, size: 9, font: fontRegular, color: primaryColor });
  y -= 11;
  page.drawText('Narayana Junior College', { x: margin, y: y, size: 8.5, font: fontItalic, color: primaryColor });
  const interScore = 'Percentage : 87.7%';
  page.drawText(interScore, { x: width - margin - fontItalic.widthOfTextAtSize(interScore, 8.5), y: y, size: 8.5, font: fontItalic, color: primaryColor });
  y -= 13;

  // SSC
  page.drawText('Secondary School Certificate (SSC)', { x: margin, y: y, size: 9, font: fontBold, color: primaryColor });
  const sscYear = '2020';
  page.drawText(sscYear, { x: width - margin - fontRegular.widthOfTextAtSize(sscYear, 9), y: y, size: 9, font: fontRegular, color: primaryColor });
  y -= 11;
  page.drawText('Keshava Reddy Concept EM High School', { x: margin, y: y, size: 8.5, font: fontItalic, color: primaryColor });
  const sscScore = 'Percentage : 100%';
  page.drawText(sscScore, { x: width - margin - fontItalic.widthOfTextAtSize(sscScore, 8.5), y: y, size: 8.5, font: fontItalic, color: primaryColor });
  y -= 15;

  // 5. AWARDS & CERTIFICATIONS
  drawSectionTitle('Awards & Certifications');

  const cert1 = "Full Stack Java Certified ExcelR EdTech in collab with APSCHE – JAVA (2025): Certified in enterprise Java architecture, RESTful API integration, and relational database management.";
  page.drawText('•', { x: margin + 6, y: y, size: 9, font: fontBold, color: primaryColor });
  drawWrappedText(cert1, margin + 16, contentWidth - 16, 8.5, fontRegular, primaryColor, 10.8);
  y -= 4;

  const cert2 = "Web Full Stack Developer Virtual Internship – ExcelR EdTech (2025): Validated expertise in building full-stack web architectures using HTML5, CSS3, JavaScript, React.js, Java, Spring Boot, and RESTful microservices.";
  page.drawText('•', { x: margin + 6, y: y, size: 9, font: fontBold, color: primaryColor });
  drawWrappedText(cert2, margin + 16, contentWidth - 16, 8.5, fontRegular, primaryColor, 10.8);

  const pdfBytes = await pdfDoc.save();
  const outputDir = path.resolve('./public');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Save as both 'nallani_naresh_resume.pdf' and 'Naresh_Nallani_Java_FullStack_Resume.pdf'
  const primaryPath = path.join(outputDir, 'nallani_naresh_resume.pdf');
  const legacyPath = path.join(outputDir, 'Naresh_Nallani_Java_FullStack_Resume.pdf');
  fs.writeFileSync(primaryPath, pdfBytes);
  fs.writeFileSync(legacyPath, pdfBytes);

  console.log(`Resume PDF generated successfully at ${primaryPath} and ${legacyPath}`);
}

generateResume().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
