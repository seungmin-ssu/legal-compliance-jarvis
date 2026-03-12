// 파일명: donna_db.js
// 🚨 DONNA 통합 법률 & 컴플라이언스 데이터베이스 (확장형 모듈)
// 메인 화면과 결과 화면 양쪽에서 공통으로 로드하여 사용합니다.

const legalKeywords = [
    // 🌍 1. 글로벌 ESG & 기후변화 (Global ESG & Climate)
    "ESG 경영", "Climate Change", "기후 소송 (Climate Litigation)", "Greenwashing (그린워싱)", "탄소중립 (Net Zero)", "RE100",
    "CBAM (탄소국경조정제도)", "CSDDD (공급망실사법)", "CSRD (기업지속가능성보고지침)", "Scope 3 탄소배출", "생물다양성 (Biodiversity)",
    "TNFD", "ISSB 공시 기준", "온실가스 배출권", "환경영향평가법", "폐기물관리법", "순환경제",

    // ⚖️ 2. 컴플라이언스, 반부패 및 기업지배구조 (Compliance & Anti-Corruption)
    "Compliance Program (CP)", "자율준수프로그램", "내부통제 (Internal Control)", "경영판단의 원칙 (Business Judgment Rule)",
    "Anti-Corruption (반부패)", "FCPA (해외부패방지법)", "UKBA (영국 뇌물방지법)", "청탁금지법 (김영란법)", "자금세탁방지 (AML)",
    "내부고발자 보호 (Whistleblowing)", "이해상충 (Conflict of Interest)", "경제제재 (Economic Sanctions)", "OFAC 제재", "수출통제 (Export Control)",
    "기업지배구조", "스튜어드십 코드", "사외이사 의무", "준법지원인", "ISO 37301 (컴플라이언스 경영시스템)",

    // 📉 3. 공정거래 & 독점규제 (Antitrust & Competition)
    "공정거래법", "Monopoly (독점)", "Cartel (담합/부당공동행위)", "시장지배적지위 남용", "불공정거래행위", "부당지원행위", "일감 몰아주기",
    "사익편취 규제", "기업결합 심사 (M&A Clearance)", "하도급법", "가맹사업법", "대리점법", "표시광고법", "약관규제법",
    "전속고발권", "리니언시 (자진신고자 감면제도)", "동의의결제도", "하도급대금 연동제", "기술탈취",

    // 🚢 4. 국제통상 & 분쟁해결 (International Trade & Dispute)
    "WTO Dispute Settlement", "GATT", "Anti-Dumping (반덤핑)", "Safeguard (세이프가드)", "상계관세 (CVD)", "FTA (자유무역협정)",
    "ISDS (투자자-국가 분쟁)", "국제상사중재 (International Arbitration)", "ICC Rules", "UNCITRAL", "국제사법재판소 (ICJ)",
    "CISG (유엔국제물품매매협약)", "Incoterms (인코텀즈)", "L/C (신용장)", "Force Majeure (불가항력)", "Hardship (사정변경)",
    "Governing Law (준거법)", "Jurisdiction (관할합의)", "외국환거래법", "관세법",

    // 🇺🇸 5. 미국법 & 소송 절차 (US Law & Litigation)
    "Attorney Client Privilege (변호사-의뢰인 비닉특권)", "Work Product Doctrine", "Discovery (디스커버리/증거개시)",
    "e-Discovery (전자증거개시)", "Deposition (증언녹취)", "Subpoena (소환장)", "Class Action (집단소송)",
    "Punitive Damages (징벌적 손해배상)", "Torts (불법행위법)", "Negligence (과실)", "Strict Liability (무과실책임)",
    "Injunction (가처분/금지명령)", "Statute of Limitations (소멸시효)", "Summary Judgment (약식판결)", "Due Process (적법절차)",

    // 💻 6. IT, 프라이버시 & 데이터 보호 (IT, Data & Privacy)
    "GDPR (일반데이터보호규정)", "개인정보보호법", "신용정보법", "망분리 규제", "EU AI Act (유럽 인공지능법)",
    "DMA (디지털시장법)", "DSA (디지털서비스법)", "정보통신망법", "위치정보법", "랜섬웨어 대응", "Data Breach (데이터 유출)",
    "CISO (정보보호최고책임자)", "잊힐 권리", "국외이전 (Cross-border Data Transfer)", "클라우드 보안",

    // 💡 7. 지식재산권 (IP) & 영업비밀
    "Patent Troll (NPE/특허괴물)", "Trade Secret (영업비밀)", "부정경쟁방지법", "산업기술유출방지법", "직무발명",
    "상표권 침해", "저작권법", "디자인보호법", "특허 침해 소송 (Patent Infringement)", "IP 실사 (IP Due Diligence)",
    "NDA (비밀유지계약)", "Non-compete (경업금지약정)", "오픈소스 컴플라이언스", "특허무효심판",

    // 🏢 8. 기업법무 일반 & M&A (Corporate & M&A)
    "M&A (인수합병)", "Due Diligence (기업실사)", "상법", "자본시장법", "LBO (차입매수)", "지주회사 규제",
    "Joint Venture (합작투자)", "경영권 방어", "Poison Pill (포이즌필)", "차등의결권", "주주총회 대응",
    "Proxy Fight (위임장 대결)", "소수주주권", "배당", "회사 분할", "주식교환", "정관 변경", "배임수재",

    // 👷 9. 노동 & 인사 (Labor & Employment)
    "중대재해처벌법", "산업안전보건법", "근로기준법", "통상임금", "최저임금법", "주52시간제", "직장내 괴롭힘 방지법",
    "남녀고용평등법", "성희롱 예방", "부당해고 구제", "노동조합법", "단체교섭", "쟁의행위", "파견법", "불법파견",
    "기간제 근로자 보호", "취업규칙 불이익 변경", "임금피크제",

    // ⚖️ 10. 민사, 행정 & 소비재/F&B 리스크 (Civil & F&B Regulations)
    "민사소송법", "민사집행법", "소유권이전등기", "손해배상", "가압류/가처분", "식품위생법", "주세법",
    "식품표시광고법", "PL법 (제조물책임법)", "소비자 집단소송", "리콜 (Recall)", "행정소송법", "집행정지"
];