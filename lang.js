/* lang.js - 全站完整翻译库 */

const translations = {
    "zh": {
        // === 导航与通用 ===
        "nav_home": "Home",
        "nav_about": "About",
        "nav_projects": "Projects",
        "nav_contact": "Contact",
        "back_projects": "← 返回项目列表",
        "view_details": "点击查看详情页 ↗",
        "view_arch": "查看架构图与界面展示 →",
        "btn_visit_site": "访问网站",
        "btn_download_resume": "📥 下载完整简历 (PDF)",

        // === 首页 (Index) ===
        "idx_hello": "Hello, I'm 崔馨予.",
        "idx_role": "算法工程师 (Algorithm Engineer)",
        "idx_tags": "CV / RecSys / Multimodal / Audio",
        "idx_edu_master": "Ajou University 硕士（QS Top 500）",
        "idx_edu_bachelor": "延边大学 (211)",
        "idx_exp_pku": "北大信息技术科创中心实习经历",
        "idx_gpa": "GPA Top 5%",
        "idx_btn_projects": "查看项目经历",
        "idx_btn_about": "了解更多",

        // === 关于页 (About) ===
        "about_edu_title": "🎓 教育背景",
        "about_master_role": "硕士 | 计算机科学与技术",
        "about_master_courses": "<strong>核心课程：</strong>AI Program, Content Data Analysis, Big Data System, Database System, Artificial Intelligence Lecture",
        "about_bachelor_role": "本科 | 计算机科学与技术",
        "about_bachelor_courses": "<strong>核心课程：</strong>数据结构与算法, 操作系统, 计算机网络, 计算机组成原理, 软件工程, 微机原理, C语言, 数据库, AI基础, 信息安全, Web开发, 机器学习, 模式识别, 数字信号处理",
        "about_bachelor_minor": "<strong>辅修课程：</strong>日语泛读，基础日语视听说，基础日语会话，基础日语1 & 2，高级日语1",
        
        "about_work_title": "💼 工作与实习经历",
        "pku_role": "北大信息技术科创中心 | 算法实习生",
        "pku_desc_1": "负责<strong>实心球检测测距</strong>全流程（Python验证→C++部署），优化YOLOv8模型，撰写相关专利。",
        "pku_desc_2": "负责<strong>烟火检测</strong>项目落地，通过数据清洗和双模型策略解决误检问题，完成模型量化与算子对齐。",
        "pku_desc_3": "参与<strong>昆虫计数</strong>及<strong>声学异常检测</strong>项目，积累了丰富的端侧部署经验。",
        
        "peak_role": "巅峰表现 | 音频算法实习生",
        "peak_desc_1": "针对短时脉冲音检测难点，构建了 TC-ResNet/DS-CNN 监督基线及 MAE 自监督基线。",
        "peak_desc_2": "搭建了完整的工程链路：统一配置管理、监控训练指标、脚本化产出 ROC/阈值曲线。",
        
        "ajou_role": "Ajou University | 机器学习课程助教",
        "ajou_desc_1": "负责课堂教学支持、作业辅导及科研协助。",
        "ajou_desc_2": "收集学生反馈协助老师优化课程设置，撰写教案，获得师生一致好评。",

        "about_honor_title": "🏆 荣誉与成果",
        "honor_1": "<strong>竞赛获奖：</strong>第十四届全国大学生信息安全竞赛 - 优胜奖 (国家级)",
        "honor_2": "<strong>发明专利：</strong>一种基于改进 YOLOv8 算法的实心球检测方法与系统 (绍兴北大信息技术科创中心)",
        "about_tech_title": "🛠 技术栈",

        // === 联系页 (Contact) ===
        "contact_title": "Let's Connect!",
        "contact_text": "我目前正在寻找 <strong>算法工程师 / 深度学习工程师</strong> 的全职机会。<br>如果您对我的背景感兴趣，欢迎随时联系。",
        "contact_email_label": "📧 邮箱: 1042617184@qq.com",
        "contact_wechat_label": "💬 微信: cuipangpang0902",

        // === 项目列表页 (Projects) ===
        "proj_main_title": "项目经历",
        "proj_main_subtitle": "多模态 / 计算机视觉 / 搜索推荐 / 音频算法 / 网页开发",
        
        // 分类标题
        "cat_multi": "🧩 多模态与AIGC (Multimodal AI)",
        "cat_cv": "👁️ 计算机视觉 (Computer Vision)",
        "cat_recsys": "📈 搜索与推荐系统 (Search & RecSys)",
        "cat_audio": "🎵 音频算法 (Audio Algorithms)",
        "cat_github": "🌍 GitHub仓库主页",
        "gh_portfolio_title": "个人作品集主页 (Personal Portfolio)",
        "gh_portfolio_desc": "GitHub Pages 个人技术展示网站。",

        // Pet Doctor 摘要 (Projects页)
        "pd_card_desc": "全栈式宠物医疗辅助小程序，融合视觉、音频与文本的多模态大模型技术。",
        "pd_list_bg": "<strong>项目背景：</strong>针对宠物医疗资源不均问题，开发基于微调大模型的智能问诊系统。",
        "pd_list_tech": "<strong>核心技术：</strong><br>1. <strong>多模态诊断：</strong>使用 Qwen2.5-VL 处理图片，结合文本生成分析。<br>2. <strong>声音情感分析：</strong>识别宠物叫声情绪。<br>3. <strong>RAG 知识库：</strong>基于 Milvus 的兽医知识库。",
        "pd_list_arch": "<strong>架构设计：</strong>采用“后融合”策略，独立处理视觉流与音频流，最后由 LLM 整合。",
        "pd_list_res": "<strong>成果：</strong>实现5大科室筛查，成功上线微信小程序。",

        // CV项目 - 实心球
        "cv_ball_title": "实心球智能检测与测距系统",
        "cv_ball_sub": "北大信息技术科创中心 | 算法实习项目",
        "cv_ball_pt": "<strong>痛点解决：</strong>针对实心球目标小、运动模糊、背景干扰强的问题，提出了一套高精度检测方案。",
        "cv_ball_algo": "<strong>算法改进：</strong>引入 <strong>BiFPN</strong> 和轻量级 FRMHead，配合 NWD Loss 和 <strong>SAHI</strong> 切片推理，显著提升小目标检出率。",
        "cv_ball_loc": "<strong>落点与测距：</strong>设计“轨迹聚类+趋势反转”定位落点；开发分区投影+偏差曲面矫正算法测距。",
        "cv_ball_eng": "<strong>工程落地：</strong>完成模型 ONNX 转 BMODEL 量化，使用 BMCV 进行端侧 C++ 部署，修复精度问题。",
        "cv_ball_res": "<strong>成果：</strong>小目标 mAP 达到 <span class='highlight-text'>112%</span> (相对基线)，落地误差≤1帧/1cm，<strong>已撰写专利</strong>。",

        // CV项目 - PMMW
        "cv_pmmw_title": "PMMW 违禁品轻量化检测",
        "cv_pmmw_sub": "学术研究项目 | 论文/竞赛",
        "cv_pmmw_task": "<strong>任务：</strong>在被动毫米波（PMMW）图像中实时检测隐匿违禁品。",
        "cv_pmmw_opt": "<strong>模型优化：</strong>Backbone 融合深度可分离卷积，Neck 去除冗余特征层；检测头采用多支解耦与非对称压缩。",
        "cv_pmmw_dep": "<strong>部署策略：</strong>设计自适应校准算法，实施 <strong>FP32-INT8 全量化</strong>。",
        "cv_pmmw_res": "<strong>成果：</strong>模型压缩率达 26.98%，推理速度提升 <span class='highlight-text'>37.5%</span>，低对比度 mAP 提升 4.2%。",

        // CV项目 - 烟火
        "cv_fire_title": "复杂场景烟火检测与量化",
        "cv_fire_sub": "北大信息技术科创中心 | 算法实习项目",
        "cv_fire_dif": "<strong>难点：</strong>聚集场景下误检率高，且需并在端侧设备运行。",
        "cv_fire_str": "<strong>策略：</strong>重建数据集（加硬负样本），设计<strong>双版本模型策略</strong>：<br>1. 低召回高精度版（极低误报）。<br>2. 高召回低精度版（全检出）。",
        "cv_fire_qat": "<strong>量化：</strong>从 DeepSparse QAT 转为“FP预训→QAT微调→校准”流程，并对齐算子，成功交付。",

        // RecSys项目 - OPE
        "rs_ope_title": "OPE：面向多任务学习的精排优化模型",
        "rs_ope_sub": "学术研究项目 | 推荐算法",
        "rs_ope_bg": "<strong>背景：</strong>解决 MMOE/PLE 等模型在离线训练时的任务冲突与“负迁移”问题。",
        "rs_ope_inno": "<strong>创新点 (OPE结构)：</strong><br>1. <strong>特征优选：</strong>每个任务独立选择最相关特征子集。<br>2. <strong>个性化 Embedding：</strong>共享特征ID但使用独立 Embedding 参数。",
        "rs_ope_res": "<strong>成果：</strong>CTR任务 AUC 提升 0.10%，CVR 提升 0.15%，LogLoss 下降约 0.5%。",

        // RecSys项目 - Meta Learning
        "rs_meta_title": "基于元学习的冷启动 Embedding 框架",
        "rs_meta_sub": "学术研究项目 | 冷启动优化",
        "rs_meta_goal": "<strong>目标：</strong>利用元学习（Meta Learning）解决新物品（Item）的 ID Embedding 初始化问题。",
        "rs_meta_method": "<strong>方法：</strong>构造 ID Embedding 生成器，使用 MAML 训练；引入<strong>对比学习</strong>增强任务；对交互序列去噪。",
        "rs_meta_res": "<strong>成果：</strong>离线 GAUC 从 0.85 提升至 <span class='highlight-text'>0.86</span>。",

        // Audio项目
        "au_pulse_title": "短时脉冲音检测与异常监控",
        "au_pulse_sub": "巅峰表现 | 音频算法实习",
        "au_pulse_dif": "<strong>难点：</strong>脉冲音极短、易被背景噪掩盖，且突变特征弱。",
        "au_pulse_algo": "<strong>算法：</strong><br>1. 数据增强：纠正分布偏置。<br>2. 模型：Log-Mel/MFCC + <strong>TC-ResNet/DS-CNN</strong> 及 MAE 自监督。<br>3. 异常检测：TSNE 抽样 + P95/P99 阈值冷却。",
        "au_pulse_eng": "<strong>全链路工程：</strong>完成从前端数据配置到训练、测试的自动化脚本（YAML/JSON配置，BPMN工作流）。",

        // === Pet Doctor 详情页 ===
        "pd_page_title": "宠物健康 AI 智能诊断系统",
        "pd_page_sub": "基于 Qwen2.5-VL 多模态大模型与 RAG 技术的全科宠物医疗辅助平台",
        "pd_tag_1": "微信小程序", "pd_tag_2": "全科诊断", "pd_tag_3": "异宠支持", "pd_tag_4": "行为分析",
        
        "pd_arch_title": "🏗️ 系统架构 (System Architecture)",
        "pd_arch_desc_title": "架构设计说明：",
        "pd_arch_content": "系统采用了<strong>“端云协同 + 后融合”</strong>的设计模式。前端小程序负责采集多模态数据，后端 FastAPI 网关分发任务：视觉流进入 Qwen-VL，音频流进入声学模型。最终由 LLM 结合 Milvus 知识库（RAG）生成报告。",

        "pd_clin_title": "🩺 AI 临床诊断模块 (Clinical Diagnosis)",
        "pd_clin_sub": "基于 CV 计算机视觉与医学知识库，覆盖四大核心科室。",
        "pd_feat_skin": "皮肤病变检测",
        "pd_feat_skin_desc": "通过对比学习区分真菌、螨虫、细菌性皮炎。支持患处分割与严重程度分级。",
        "pd_feat_ear": "耳道健康分析",
        "pd_feat_ear_desc": "识别耳螨、马拉色菌感染及中耳炎。结合颜色与纹理特征提取。",
        "pd_feat_eye": "眼科疾病筛查",
        "pd_feat_eye_desc": "检测角膜混浊、樱桃眼、结膜炎及白内障。精准定位眼部区域。",
        "pd_feat_dig": "消化系统分析",
        "pd_feat_dig_desc": "<strong>排泄物：</strong>基于 Bristol 分级自动评分。<br><strong>呕吐物：</strong>分析颜色与未消化食物，预警急症。",

        "pd_behav_title": "🧠 行为与认知分析 (Behavior & Cognition)",
        "pd_feat_emo": "多模态情绪识别",
        "pd_feat_emo_desc": "融合视觉（耳位/瞳孔/尾巴）与听觉（叫声），识别焦虑、疼痛、兴奋等 6 种情绪。",
        "pd_feat_act": "异常行为监控",
        "pd_feat_act_desc": "识别睡眠、跛行等模式。结合时间序列数据，预警骨关节炎或分离焦虑。",
        "pd_feat_breed": "精准品种鉴定",
        "pd_feat_breed_desc": "支持 100+ 种犬猫品种识别，辅助判断品种特异性遗传病风险。",

        "pd_exo_title": "🐹 异宠专科支持 (Exotic Pets)",
        "pd_exo_card_title": "爬行类与小型哺乳动物支持",
        "pd_exo_card_sub": "针对非犬猫类宠物建立专门的知识库与识别模型。",
        "pd_exo_list": "<li><strong>支持物种：</strong>仓鼠、兔子、龙猫、乌龟、蜥蜴、鹦鹉等。</li><li><strong>特异性诊断：</strong><br>🐀 <strong>啮齿类：</strong>湿尾症、牙齿过长。<br>🐢 <strong>爬行类：</strong>龟壳腐甲病、软壳病。<br>🐦 <strong>鸟类：</strong>羽毛啄拔、鸟喙生长异常。</li>",

        "pd_ui_title": "📱 界面功能展示 (UI Showcase)",
        "pd_ui_1": "1. 主界面", "pd_ui_2": "2. 宠物音频翻译界面", "pd_ui_3": "3. 部分结果展示"
    },

    "en": {
        "nav_home": "Home", "nav_about": "About", "nav_projects": "Projects", "nav_contact": "Contact",
        "back_projects": "← Back to Projects", "view_details": "View Details ↗",
        "view_arch": "View Architecture & UI →", "btn_visit_site": "Visit Website",
        "btn_download_resume": "📥 Download Resume (PDF)",

        "idx_hello": "Hello, I'm Cui Xinyu.",
        "idx_role": "Algorithm Engineer",
        "idx_tags": "CV / RecSys / Multimodal / Audio",
        "idx_edu_master": "Ajou University (Master QS Top 500)",
        "idx_edu_bachelor": "Yanbian University (211)",
        "idx_exp_pku": "Intern @ PKU Info-Tech Center",
        "idx_gpa": "GPA Top 5%",
        "idx_btn_projects": "View Projects", "idx_btn_about": "Learn More",

        "about_edu_title": "🎓 Education",
        "about_master_role": "Master | Computer Science",
        "about_master_courses": "<strong>Core Courses:</strong> AI Program, Content Data Analysis, Big Data System, Database System, AI Lecture",
        "about_bachelor_role": "Bachelor | Computer Science",
        "about_bachelor_courses": "<strong>Core Courses:</strong> Data Structures, OS, Networks, Computer Org, Software Eng, C Prog, Database, AI Basics, InfoSec, Web Dev, ML, Pattern Recognition, DSP",
        "about_bachelor_minor": "<strong>Minor:</strong> Japanese Reading, Listening, Speaking, Basic Japanese 1&2, Advanced Japanese 1",

        "about_work_title": "💼 Experience",
        "pku_role": "PKU Info-Tech Center | Algorithm Intern",
        "pku_desc_1": "Led the <strong>Solid Ball Detection</strong> project (Python to C++ deployment), optimized YOLOv8, and drafted a patent.",
        "pku_desc_2": "Delivered <strong>Smoke/Fire Detection</strong> system; solved false positives via dual-model strategy; completed quantization and operator alignment.",
        "pku_desc_3": "Participated in <strong>Insect Counting</strong> and <strong>Acoustic Anomaly Detection</strong> projects; gained edge deployment experience.",
        
        "peak_role": "Peak Performance | Audio Algorithm Intern",
        "peak_desc_1": "Built TC-ResNet/DS-CNN supervised baselines and MAE self-supervised baselines for short-pulse sound detection.",
        "peak_desc_2": "Established a full engineering pipeline: config management, training monitoring, and automated ROC/threshold plotting.",

        "ajou_role": "Ajou University | Machine Learning TA",
        "ajou_desc_1": "Responsible for classroom support, tutoring, and research assistance.",
        "ajou_desc_2": "Collected student feedback to optimize curriculum; received high praise from faculty and students.",

        "about_honor_title": "🏆 Honors",
        "honor_1": "<strong>Award:</strong> 14th National College Student InfoSec Contest - Winner (National Level)",
        "honor_2": "<strong>Patent:</strong> A Solid Ball Detection Method & System Based on Improved YOLOv8",
        "about_tech_title": "🛠 Tech Stack",

        "contact_title": "Let's Connect!",
        "contact_text": "I am looking for full-time opportunities as an <strong>Algorithm / Deep Learning Engineer</strong>.<br>Feel free to reach out.",
        "contact_email_label": "📧 Email: 1042617184@qq.com",
        "contact_wechat_label": "💬 WeChat: cuipangpang0902",

        "proj_main_title": "Projects",
        "proj_main_subtitle": "Multimodal / CV / RecSys / Audio / Web Dev",
        "cat_multi": "🧩 Multimodal & AIGC", "cat_cv": "👁️ Computer Vision",
        "cat_recsys": "📈 Search & RecSys", "cat_audio": "🎵 Audio Algorithms",
        "cat_github": "🌍 GitHub Portfolio",
        "gh_portfolio_title": "Personal Portfolio", "gh_portfolio_desc": "GitHub Pages Technical Showcase Site.",

        "pd_card_desc": "Full-stack pet medical assistant using Visual-Audio-Text multimodal LLMs.",
        "pd_list_bg": "<strong>Background:</strong> AI diagnostic system based on fine-tuned LLMs for uneven medical resources.",
        "pd_list_tech": "<strong>Core Tech:</strong><br>1. <strong>Multimodal:</strong> Qwen2.5-VL for images + text.<br>2. <strong>Audio:</strong> Emotion recognition from pet sounds.<br>3. <strong>RAG:</strong> Milvus-based veterinary knowledge base.",
        "pd_list_arch": "<strong>Architecture:</strong> Late fusion strategy; independent processing of visual/audio streams, integrated by LLM.",
        "pd_list_res": "<strong>Result:</strong> Implemented screening for 5 departments; launched on WeChat Mini Program.",

        "cv_ball_title": "Solid Ball Intelligent Detection",
        "cv_ball_sub": "PKU Info-Tech Center | Algorithm Intern",
        "cv_ball_pt": "<strong>Problem:</strong> High-precision detection for small, blurry, fast-moving targets.",
        "cv_ball_algo": "<strong>Algorithm:</strong> Introduced <strong>BiFPN</strong>, lightweight FRMHead, NWD Loss, and <strong>SAHI</strong> slicing.",
        "cv_ball_loc": "<strong>Localization:</strong> Designed 'Trajectory Clustering + Trend Reversal' for landing point; distortion correction for ranging.",
        "cv_ball_eng": "<strong>Engineering:</strong> ONNX to BMODEL quantization, C++ deployment on BMCV, precision fixes.",
        "cv_ball_res": "<strong>Result:</strong> Small object mAP <span class='highlight-text'>112%</span> (vs baseline), Error ≤1 frame/1cm. <strong>Patent Drafted</strong>.",

        "cv_pmmw_title": "PMMW Contraband Detection",
        "cv_pmmw_sub": "Academic Research | Paper/Contest",
        "cv_pmmw_task": "<strong>Task:</strong> Real-time hidden contraband detection in Passive Millimeter Wave images.",
        "cv_pmmw_opt": "<strong>Optimization:</strong> Depthwise separable conv backbone; Decoupled head with asymmetric compression.",
        "cv_pmmw_dep": "<strong>Deployment:</strong> Adaptive calibration, <strong>FP32-INT8 Quantization</strong>.",
        "cv_pmmw_res": "<strong>Result:</strong> Compression 26.98%, Speed +<span class='highlight-text'>37.5%</span>, mAP +4.2% in low contrast.",

        "cv_fire_title": "Complex Scene Fire/Smoke Detection",
        "cv_fire_sub": "PKU Info-Tech Center | Algorithm Intern",
        "cv_fire_dif": "<strong>Challenge:</strong> High false positives in crowded scenes; edge deployment required.",
        "cv_fire_str": "<strong>Strategy:</strong> Dataset reconstruction (hard negatives). <strong>Dual-Model:</strong><br>1. Low Recall/High Precision.<br>2. High Recall/Low Precision.",
        "cv_fire_qat": "<strong>Quantization:</strong> DeepSparse QAT (FP Pretrain -> QAT Finetune -> Calib), operator alignment.",

        "rs_ope_title": "OPE: Optimization for MTL Ranking",
        "rs_ope_sub": "Academic Research | RecSys",
        "rs_ope_bg": "<strong>Background:</strong> Solve task conflict and negative transfer in MMOE/PLE models.",
        "rs_ope_inno": "<strong>Innovation:</strong><br>1. <strong>Feature Selection:</strong> Independent feature subsets per task.<br>2. <strong>Personalized Embedding:</strong> Shared ID but independent parameters.",
        "rs_ope_res": "<strong>Result:</strong> CTR AUC +0.10%, CVR +0.15%, LogLoss -0.5%.",

        "rs_meta_title": "Meta Learning Cold-Start Embedding",
        "rs_meta_sub": "Academic Research | Cold Start",
        "rs_meta_goal": "<strong>Goal:</strong> Initialize ID Embeddings for new items using Meta Learning.",
        "rs_meta_method": "<strong>Method:</strong> MAML-trained generator; <strong>Contrastive Learning</strong> for task enhancement; Sequence denoising.",
        "rs_meta_res": "<strong>Result:</strong> Offline GAUC increased from 0.85 to <span class='highlight-text'>0.86</span>.",

        "au_pulse_title": "Short-Pulse Sound Detection",
        "au_pulse_sub": "Peak Performance | Audio Intern",
        "au_pulse_dif": "<strong>Challenge:</strong> Short pulses masked by noise; weak features.",
        "au_pulse_algo": "<strong>Algorithm:</strong><br>1. Augmentation: Correct distribution bias.<br>2. Model: Log-Mel/MFCC + <strong>TC-ResNet/DS-CNN</strong> & MAE.<br>3. Anomaly: TSNE Sampling + P95/P99 Thresholds.",
        "au_pulse_eng": "<strong>Pipeline:</strong> Automated scripts from config to training/testing (YAML/JSON, BPMN).",

        // Pet Doctor Detail
        "pd_page_title": "Pet Health AI Diagnostic System",
        "pd_page_sub": "General Practice Assistant based on Qwen2.5-VL & RAG",
        "pd_tag_1": "WeChat Mini Program", "pd_tag_2": "General Diagnosis", "pd_tag_3": "Exotic Pets", "pd_tag_4": "Behavior",
        "pd_arch_title": "🏗️ System Architecture",
        "pd_arch_desc_title": "Design Overview:",
        "pd_arch_content": "Uses <strong>'Cloud-Edge Synergy + Late Fusion'</strong>. Frontend collects multimodal data. Backend (FastAPI) distributes: Vision to Qwen-VL, Audio to acoustic models. LLM + Milvus (RAG) generates report.",
        "pd_clin_title": "🩺 Clinical Diagnosis",
        "pd_clin_sub": "CV + Medical Knowledge Base. Covers 4 Core Departments.",
        "pd_feat_skin": "Skin Lesion Detection",
        "pd_feat_skin_desc": "Contrastive learning for Fungal/Mite/Bacterial dermatitis. Segmentation & Severity grading.",
        "pd_feat_ear": "Ear Health Analysis",
        "pd_feat_ear_desc": "Identifies Ear Mites, Malassezia, Otitis Media. Texture & Color analysis.",
        "pd_feat_eye": "Ophthalmology Screening",
        "pd_feat_eye_desc": "Detects Corneal Opacity, Cherry Eye, Conjunctivitis, Cataracts. ROI Extraction.",
        "pd_feat_dig": "Digestive System",
        "pd_feat_dig_desc": "<strong>Stool:</strong> Bristol Scale Grading.<br><strong>Vomit:</strong> Color/Food analysis for emergency alerts.",
        "pd_behav_title": "🧠 Behavior & Cognition",
        "pd_feat_emo": "Multimodal Emotion",
        "pd_feat_emo_desc": "Fusion of Visual (Ear/Pupil/Tail) & Audio (Bark) for 6 emotions (Anxiety, Pain, etc.).",
        "pd_feat_act": "Abnormal Behavior",
        "pd_feat_act_desc": "Monitors Sleep, Limping. Time-series analysis for Osteoarthritis/Separation Anxiety.",
        "pd_feat_breed": "Precise Breed ID",
        "pd_feat_breed_desc": "100+ Dog/Cat breeds. Assists in genetic disease risk assessment.",
        "pd_exo_title": "🐹 Exotic Pets Support",
        "pd_exo_card_title": "Reptiles & Small Mammals",
        "pd_exo_card_sub": "Specialized models filling the market gap for non-cat/dog pets.",
        "pd_exo_list": "<li><strong>Species:</strong> Hamster, Rabbit, Chinchilla, Turtle, Lizard, Parrot.</li><li><strong>Diagnosis:</strong><br>🐀 Wet Tail, Overgrown Teeth.<br>🐢 Shell Rot, Soft Shell.<br>🐦 Feather Plucking.</li>",
        "pd_ui_title": "📱 UI Showcase",
        "pd_ui_1": "1. Home", "pd_ui_2": "2. Audio Translator", "pd_ui_3": "3. Report"
    },

    "ko": {
        "nav_home": "홈", "nav_about": "소개", "nav_projects": "프로젝트", "nav_contact": "연락처",
        "back_projects": "← 목록으로 돌아가기", "view_details": "상세 보기 ↗",
        "view_arch": "아키텍처 및 UI 보기 →", "btn_visit_site": "웹사이트 방문",
        "btn_download_resume": "📥 이력서 다운로드 (PDF)",

        "idx_hello": "안녕하세요, 최신위입니다.",
        "idx_role": "알고리즘 엔지니어 (Algorithm Engineer)",
        "idx_tags": "CV / 추천시스템 / 멀티모달 / 오디오",
        "idx_edu_master": "아주대학교 석사 (QS Top 500)",
        "idx_edu_bachelor": "연변대학교 (211)",
        "idx_exp_pku": "북경대 정보기술센터 인턴",
        "idx_gpa": "학점 상위 5%",
        "idx_btn_projects": "프로젝트 보기", "idx_btn_about": "더 알아보기",

        "about_edu_title": "🎓 학력",
        "about_master_role": "석사 | 컴퓨터 공학",
        "about_master_courses": "<strong>핵심 과목:</strong> AI Program, 콘텐츠 데이터 분석, 빅데이터 시스템, 데이터베이스, 인공지능 강의",
        "about_bachelor_role": "학사 | 컴퓨터 공학",
        "about_bachelor_courses": "<strong>핵심 과목:</strong> 자료구조, 운영체제, 네트워크, 컴퓨터구조, 소프트웨어공학, C언어, DB, AI기초, 정보보안, 웹개발, 머신러닝, 패턴인식, DSP",
        "about_bachelor_minor": "<strong>부전공:</strong> 일본어 독해, 청해, 회화, 기초/고급 일본어",

        "about_work_title": "💼 경력",
        "pku_role": "북경대 정보기술센터 | 알고리즘 인턴",
        "pku_desc_1": "<strong>메디신 볼 감지</strong> 전체 프로세스(Python검증→C++배포) 담당, YOLOv8 최적화 및 특허 작성.",
        "pku_desc_2": "<strong>화재/연기 감지</strong> 프로젝트 완수. 데이터 정제 및 듀얼 모델 전략으로 오탐지 해결, 양자화 완료.",
        "pku_desc_3": "<strong>곤충 카운팅</strong> 및 <strong>음향 이상 탐지</strong> 프로젝트 참여, 엣지 디바이스 배포 경험 축적.",
        
        "peak_role": "Peak Performance | 오디오 알고리즘 인턴",
        "peak_desc_1": "단시간 충격음(Pulse) 탐지를 위해 TC-ResNet/DS-CNN 지도학습 및 MAE 자기지도학습 베이스라인 구축.",
        "peak_desc_2": "전체 엔지니어링 파이프라인(설정 관리, 학습 모니터링, 자동화 지표 산출) 구축.",

        "ajou_role": "아주대학교 (Ajou Univ) | 머신러닝 조교",
        "ajou_desc_1": "강의 지원, 과제 지도 및 연구 보조 담당.",
        "ajou_desc_2": "학생 피드백을 수집하여 커리큘럼 최적화 지원, 교수진과 학생들로부터 호평.",

        "about_honor_title": "🏆 수상 및 성과",
        "honor_1": "<strong>수상:</strong> 제14회 전국 대학생 정보보안 경진대회 - 우수상 (국가급)",
        "honor_2": "<strong>특허:</strong> 개선된 YOLOv8 알고리즘 기반 메디신 볼 감지 방법 및 시스템",
        "about_tech_title": "🛠 기술 스택",

        "contact_title": "Let's Connect!",
        "contact_text": "현재 <strong>알고리즘 / 딥러닝 엔지니어</strong> 정규직 기회를 찾고 있습니다.<br>관심 있으시면 언제든 연락 주세요.",
        "contact_email_label": "📧 이메일: 1042617184@qq.com",
        "contact_wechat_label": "💬 위챗: cuipangpang0902",

        "proj_main_title": "프로젝트",
        "proj_main_subtitle": "멀티모달 / 컴퓨터 비전 / 추천 시스템 / 오디오 / 웹 개발",
        "cat_multi": "🧩 멀티모달 & AIGC", "cat_cv": "👁️ 컴퓨터 비전 (CV)",
        "cat_recsys": "📈 검색 및 추천 시스템", "cat_audio": "🎵 오디오 알고리즘",
        "cat_github": "🌍 GitHub 프로필",
        "gh_portfolio_title": "개인 포트폴리오 사이트", "gh_portfolio_desc": "GitHub Pages 기술 블로그.",

        "pd_card_desc": "시각-청각-텍스트 멀티모달 LLM 기반 풀스택 반려동물 의료 보조 시스템.",
        "pd_list_bg": "<strong>배경:</strong> 의료 자원 불균형 해소를 위한 미세조정 LLM 기반 스마트 진단.",
        "pd_list_tech": "<strong>핵심 기술:</strong><br>1. <strong>멀티모달:</strong> Qwen2.5-VL 이미지+텍스트 처리.<br>2. <strong>오디오:</strong> 울음소리 감정 분석.<br>3. <strong>RAG:</strong> Milvus 기반 수의학 지식 베이스.",
        "pd_list_arch": "<strong>아키텍처:</strong> 후기 융합(Late Fusion) 전략, 시각/청각 스트림 독립 처리 후 LLM 통합.",
        "pd_list_res": "<strong>성과:</strong> 5대 진료과 1차 검진 구현, 위챗 미니 프로그램 출시.",

        "cv_ball_title": "메디신 볼 지능형 감지 시스템",
        "cv_ball_sub": "북경대 정보기술센터 | 인턴 프로젝트",
        "cv_ball_pt": "<strong>문제 해결:</strong> 작고 빠르며 배경 간섭이 심한 물체의 고정밀 감지.",
        "cv_ball_algo": "<strong>알고리즘:</strong> <strong>BiFPN</strong>, 경량 FRMHead, NWD Loss 및 <strong>SAHI</strong> 슬라이싱 도입.",
        "cv_ball_loc": "<strong>위치/거리:</strong> '궤적 클러스터링+추세 반전'으로 낙하점 포착; 왜곡 보정 거리 측정.",
        "cv_ball_eng": "<strong>엔지니어링:</strong> ONNX→BMODEL 양자화, BMCV 기반 C++ 엣지 배포.",
        "cv_ball_res": "<strong>성과:</strong> 소형 객체 mAP <span class='highlight-text'>112%</span> 달성, 오차 ≤1프레임/1cm. <strong>특허 출원</strong>.",

        "cv_pmmw_title": "PMMW 금지 물품 경량화 탐지",
        "cv_pmmw_sub": "학술 연구 | 논문/대회",
        "cv_pmmw_task": "<strong>과제:</strong> 수동 밀리미터파(PMMW) 영상 내 은닉 금지 물품 실시간 탐지.",
        "cv_pmmw_opt": "<strong>최적화:</strong> Depthwise Separable Conv 백본, 비대칭 압축 헤드.",
        "cv_pmmw_dep": "<strong>배포:</strong> 적응형 보정(Calibration), <strong>FP32-INT8 전면 양자화</strong>.",
        "cv_pmmw_res": "<strong>성과:</strong> 압축률 26.98%, 추론 속도 <span class='highlight-text'>37.5%</span> 향상.",

        "cv_fire_title": "복잡한 환경의 화재/연기 감지",
        "cv_fire_sub": "북경대 정보기술센터 | 인턴 프로젝트",
        "cv_fire_dif": "<strong>난점:</strong> 군집 환경에서의 높은 오탐지율 및 엣지 구동 필요.",
        "cv_fire_str": "<strong>전략:</strong> 데이터 재구축(Hard Negative). <strong>듀얼 모델:</strong><br>1. 저재현율 고정밀(오탐지 최소화).<br>2. 고재현율 저정밀(전수 검사).",
        "cv_fire_qat": "<strong>양자화:</strong> DeepSparse QAT 파이프라인 구축 및 연산자(Operator) 정렬.",

        "rs_ope_title": "OPE: 멀티태스크 학습 랭킹 최적화",
        "rs_ope_sub": "학술 연구 | 추천 알고리즘",
        "rs_ope_bg": "<strong>배경:</strong> MMOE/PLE 모델의 태스크 충돌 및 부정적 전이(Negative Transfer) 해결.",
        "rs_ope_inno": "<strong>혁신:</strong><br>1. <strong>특징 선택:</strong> 태스크별 독립적 특징 부분집합 선택.<br>2. <strong>개인화 임베딩:</strong> ID 공유, 파라미터 분리.",
        "rs_ope_res": "<strong>성과:</strong> CTR AUC +0.10%, CVR +0.15%, LogLoss -0.5%.",

        "rs_meta_title": "메타 러닝 기반 콜드 스타트 임베딩",
        "rs_meta_sub": "학술 연구 | 콜드 스타트",
        "rs_meta_goal": "<strong>목표:</strong> 메타 러닝을 활용한 신규 아이템 ID 임베딩 초기화.",
        "rs_meta_method": "<strong>방법:</strong> MAML 기반 생성기; <strong>대조 학습(Contrastive Learning)</strong> 강화; 시퀀스 노이즈 제거.",
        "rs_meta_res": "<strong>성과:</strong> 오프라인 GAUC 0.85 → <span class='highlight-text'>0.86</span> 향상.",

        "au_pulse_title": "단시간 충격음 탐지 및 이상 모니터링",
        "au_pulse_sub": "Peak Performance | 오디오 인턴",
        "au_pulse_dif": "<strong>난점:</strong> 배경 소음에 묻히기 쉬운 매우 짧은 충격음.",
        "au_pulse_algo": "<strong>알고리즘:</strong><br>1. 증강: 분포 편향 보정.<br>2. 모델: Log-Mel/MFCC + <strong>TC-ResNet/DS-CNN</strong> & MAE.<br>3. 이상 탐지: TSNE 샘플링 + P95/P99 임계값.",
        "au_pulse_eng": "<strong>파이프라인:</strong> 설정부터 학습/테스트까지 자동화 스크립트 구현.",

        // Pet Doctor Detail
        "pd_page_title": "반려동물 AI 스마트 진단 시스템",
        "pd_page_sub": "Qwen2.5-VL 및 RAG 기술 기반 종합 의료 보조 플랫폼",
        "pd_tag_1": "위챗 미니프로그램", "pd_tag_2": "종합 진단", "pd_tag_3": "특수 동물", "pd_tag_4": "행동 분석",
        "pd_arch_title": "🏗️ 시스템 아키텍처",
        "pd_arch_desc_title": "설계 개요:",
        "pd_arch_content": "<strong>'단말-클라우드 협업 + 후기 융합'</strong> 방식. 프론트엔드가 데이터를 수집하고 백엔드(FastAPI)가 분배: 시각은 Qwen-VL, 청각은 음향 모델로 이동. 최종적으로 LLM과 Milvus(RAG)가 리포트 생성.",
        "pd_clin_title": "🩺 AI 임상 진단 모듈",
        "pd_clin_sub": "CV 및 의학 지식 베이스 기반. 4대 핵심 진료과 커버.",
        "pd_feat_skin": "피부 병변 감지",
        "pd_feat_skin_desc": "대조 학습을 통해 곰팡이/진드기/세균성 피부염 구분. 환부 분할 및 심각도 등급.",
        "pd_feat_ear": "이도 건강 분석",
        "pd_feat_ear_desc": "귀 진드기, 말라세지아, 중이염 식별. 텍스처 및 색상 분석.",
        "pd_feat_eye": "안과 질환 스크리닝",
        "pd_feat_eye_desc": "각막 혼탁, 체리아이, 결막염, 백내장 감지. ROI 추출.",
        "pd_feat_dig": "소화기 계통 분석",
        "pd_feat_dig_desc": "<strong>배설물:</strong> Bristol 척도 자동 채점.<br><strong>구토물:</strong> 색상/음식물 분석으로 응급 상황 경고.",
        "pd_behav_title": "🧠 행동 및 인지 분석",
        "pd_feat_emo": "멀티모달 감정 인식",
        "pd_feat_emo_desc": "시각(귀/동공/꼬리)과 청각(짖는 소리)을 융합하여 불안, 고통 등 6가지 감정 식별.",
        "pd_feat_act": "이상 행동 모니터링",
        "pd_feat_act_desc": "수면, 파행(절뚝거림) 등 패턴 인식. 시계열 데이터로 관절염/분리불안 경고.",
        "pd_feat_breed": "정밀 품종 감정",
        "pd_feat_breed_desc": "100종 이상의 개/고양이 품종 식별. 유전병 위험 평가 보조.",
        "pd_exo_title": "🐹 특수 동물(Exotic Pets) 지원",
        "pd_exo_card_title": "파충류 및 소형 포유류 지원",
        "pd_exo_card_sub": "개/고양이 이외의 반려동물을 위한 전문 지식 및 모델 구축.",
        "pd_exo_list": "<li><strong>지원 종:</strong> 햄스터, 토끼, 친칠라, 거북이, 도마뱀, 앵무새.</li><li><strong>특이 진단:</strong><br>🐀 웻테일(Wet Tail), 치아 과성장.<br>🐢 갑각 썩음병, 연갑병.<br>🐦 깃털 뽑기(자해).</li>",
        "pd_ui_title": "📱 UI 기능 전시",
        "pd_ui_1": "1. 메인 화면", "pd_ui_2": "2. 펫 오디오 번역", "pd_ui_3": "3. 결과 리포트"
    },

    "ja": {
        "nav_home": "ホーム", "nav_about": "自己紹介", "nav_projects": "プロジェクト", "nav_contact": "お問い合わせ",
        "back_projects": "← 一覧に戻る", "view_details": "詳細を見る ↗",
        "view_arch": "アーキテクチャとUIを見る →", "btn_visit_site": "サイトへ移動",
        "btn_download_resume": "📥 履歴書ダウンロード (PDF)",

        "idx_hello": "こんにちは、崔馨予です。",
        "idx_role": "アルゴリズムエンジニア",
        "idx_tags": "CV / 推薦システム / マルチモーダル / 音声処理",
        "idx_edu_master": "亜洲大学 修士 (QS Top 500)",
        "idx_edu_bachelor": "延辺大学 (211)",
        "idx_exp_pku": "北京大学情報技術センター インターン",
        "idx_gpa": "GPA 上位 5%",
        "idx_btn_projects": "プロジェクトを見る", "idx_btn_about": "詳細はこちら",

        "about_edu_title": "🎓 学歴",
        "about_master_role": "修士 | 計算機科学",
        "about_master_courses": "<strong>主要科目:</strong> AI Program, コンテンツデータ分析, ビッグデータシステム, データベース, 人工知能講義",
        "about_bachelor_role": "学士 | 計算機科学",
        "about_bachelor_courses": "<strong>主要科目:</strong> データ構造, OS, ネットワーク, 計算機構成論, ソフトウェア工学, C言語, DB, AI基礎, 情報セキュリティ, Web開発, 機械学習, パターン認識, DSP",
        "about_bachelor_minor": "<strong>副専攻:</strong> 日本語読解, 聴解, 会話, 基礎/上級日本語",

        "about_work_title": "💼 職務経歴",
        "pku_role": "北京大学情報技術センター | アルゴリズムインターン",
        "pku_desc_1": "<strong>メディシンボール検知</strong>の全工程（Python検証→C++展開）を担当、YOLOv8最適化および特許作成。",
        "pku_desc_2": "<strong>火災・煙検知</strong>プロジェクトを完遂。データクリーニングとデュアルモデル戦略で誤検知を解決、量子化完了。",
        "pku_desc_3": "<strong>昆虫カウント</strong>および<strong>音響異常検知</strong>プロジェクトに参加、エッジデバイス展開の経験を蓄積。",
        
        "peak_role": "Peak Performance | 音声アルゴリズムインターン",
        "peak_desc_1": "短時間パルス音検知のため、TC-ResNet/DS-CNN 教師あり学習および MAE 自己教師あり学習ベースラインを構築。",
        "peak_desc_2": "エンジニアリングパイプライン（設定管理、学習監視、指標自動算出）を構築。",

        "ajou_role": "亜洲大学 (Ajou Univ) | 機械学習 TA",
        "ajou_desc_1": "講義サポート、課題指導、研究補助を担当。",
        "ajou_desc_2": "学生のフィードバックを収集しカリキュラム最適化を支援、教員と学生から高評価。",

        "about_honor_title": "🏆 受賞・成果",
        "honor_1": "<strong>受賞:</strong> 第14回 全国大学生情報セキュリティコンテスト - 優秀賞 (国家級)",
        "honor_2": "<strong>特許:</strong> 改良型YOLOv8アルゴリズムに基づくメディシンボール検知方法およびシステム",
        "about_tech_title": "🛠 技術スタック",

        "contact_title": "Let's Connect!",
        "contact_text": "現在、<strong>アルゴリズム / 深層学習エンジニア</strong>の正社員の機会を探しています。<br>ご興味をお持ちいただけましたら、お気軽にご連絡ください。",
        "contact_email_label": "📧 メール: 1042617184@qq.com",
        "contact_wechat_label": "💬 WeChat: cuipangpang0902",

        "proj_main_title": "プロジェクト",
        "proj_main_subtitle": "マルチモーダル / 画像認識 / 推薦システム / 音声処理 / Web開発",
        "cat_multi": "🧩 マルチモーダル & AIGC", "cat_cv": "👁️ コンピュータビジョン (CV)",
        "cat_recsys": "📈 検索・推薦システム", "cat_audio": "🎵 音声アルゴリズム",
        "cat_github": "🌍 GitHubプロフィール",
        "gh_portfolio_title": "個人ポートフォリオサイト", "gh_portfolio_desc": "GitHub Pages 技術ブログ。",

        "pd_card_desc": "視覚・聴覚・テキスト マルチモーダルLLMに基づくフルスタックペット医療補助システム。",
        "pd_list_bg": "<strong>背景:</strong> 医療資源の不均衡を解決するための、微調整LLMベースのスマート診断。",
        "pd_list_tech": "<strong>核心技術:</strong><br>1. <strong>マルチモーダル:</strong> Qwen2.5-VLで画像+テキスト処理。<br>2. <strong>音声:</strong> 鳴き声からの感情分析。<br>3. <strong>RAG:</strong> Milvusベースの獣医学ナレッジベース。",
        "pd_list_arch": "<strong>アーキテクチャ:</strong> 「Late Fusion」戦略採用。視覚・聴覚ストリームを独立処理し、LLMで統合。",
        "pd_list_res": "<strong>成果:</strong> 5大診療科のスクリーニングを実装、WeChatミニプログラムをリリース。",

        "cv_ball_title": "メディシンボール知的検知システム",
        "cv_ball_sub": "北京大学情報技術センター | インターン",
        "cv_ball_pt": "<strong>課題:</strong> 小さく高速で背景干渉が強い物体の高精度検知。",
        "cv_ball_algo": "<strong>アルゴリズム:</strong> <strong>BiFPN</strong>、軽量FRMHead、NWD Loss、<strong>SAHI</strong>スライシングを導入。",
        "cv_ball_loc": "<strong>位置・距離:</strong> 「軌跡クラスタリング+トレンド反転」で落下点特定。歪み補正による測距。",
        "cv_ball_eng": "<strong>実装:</strong> ONNX→BMODEL量子化、BMCVによるC++エッジ展開。",
        "cv_ball_res": "<strong>成果:</strong> 小物体 mAP <span class='highlight-text'>112%</span> 達成、誤差 ≤1フレーム/1cm。<strong>特許出願済み</strong>。",

        "cv_pmmw_title": "PMMW 禁止物品軽量化検知",
        "cv_pmmw_sub": "学術研究 | 論文/大会",
        "cv_pmmw_task": "<strong>タスク:</strong> パッシブミリ波(PMMW)画像内の隠蔽禁止物品のリアルタイム検知。",
        "cv_pmmw_opt": "<strong>最適化:</strong> Depthwise Separable Convバックボーン、非対称圧縮ヘッド。",
        "cv_pmmw_dep": "<strong>展開:</strong> 適応型キャリブレーション、<strong>FP32-INT8 完全量子化</strong>。",
        "cv_pmmw_res": "<strong>成果:</strong> 圧縮率 26.98%、推論速度 <span class='highlight-text'>37.5%</span> 向上。",

        "cv_fire_title": "複雑環境下の火災・煙検知",
        "cv_fire_sub": "北京大学情報技術センター | インターン",
        "cv_fire_dif": "<strong>難点:</strong> 密集環境での高い誤検知率およびエッジ動作要件。",
        "cv_fire_str": "<strong>戦略:</strong> データセット再構築(Hard Negative)。<strong>デュアルモデル:</strong><br>1. 低再現率・高精度(誤報最小化)。<br>2. 高再現率・低精度(全数検査)。",
        "cv_fire_qat": "<strong>量子化:</strong> DeepSparse QATパイプライン構築および演算子(Operator)調整。",

        "rs_ope_title": "OPE: マルチタスク学習ランキング最適化",
        "rs_ope_sub": "学術研究 | 推薦アルゴリズム",
        "rs_ope_bg": "<strong>背景:</strong> MMOE/PLEモデルにおけるタスク競合と負の転移(Negative Transfer)の解決。",
        "rs_ope_inno": "<strong>革新:</strong><br>1. <strong>特徴選択:</strong> タスクごとに独立した特徴サブセットを選択。<br>2. <strong>個別化Embedding:</strong> ID共有、パラメータ分離。",
        "rs_ope_res": "<strong>成果:</strong> CTR AUC +0.10%, CVR +0.15%, LogLoss -0.5%。",

        "rs_meta_title": "メタ学習ベースのコールドスタートEmbedding",
        "rs_meta_sub": "学術研究 | コールドスタート",
        "rs_meta_goal": "<strong>目標:</strong> メタ学習を活用した新規アイテムID Embeddingの初期化。",
        "rs_meta_method": "<strong>手法:</strong> MAMLベース生成器; <strong>対照学習(Contrastive Learning)</strong>強化; シーケンスノイズ除去。",
        "rs_meta_res": "<strong>成果:</strong> オフラインGAUC 0.85 → <span class='highlight-text'>0.86</span> 向上。",

        "au_pulse_title": "短時間パルス音検知・異常監視",
        "au_pulse_sub": "Peak Performance | 音声インターン",
        "au_pulse_dif": "<strong>難点:</strong> 背景ノイズに埋もれやすい極短パルス音。",
        "au_pulse_algo": "<strong>アルゴリズム:</strong><br>1. 増強: 分布バイアス補正。<br>2. モデル: Log-Mel/MFCC + <strong>TC-ResNet/DS-CNN</strong> & MAE。<br>3. 異常検知: TSNEサンプリング + P95/P99閾値。",
        "au_pulse_eng": "<strong>パイプライン:</strong> 設定から学習/テストまでの自動化スクリプト実装。",

        // Pet Doctor Detail
        "pd_page_title": "ペット健康AIスマート診断システム",
        "pd_page_sub": "Qwen2.5-VLおよびRAG技術に基づく総合医療補助プラットフォーム",
        "pd_tag_1": "WeChatミニプログラム", "pd_tag_2": "総合診断", "pd_tag_3": "エキゾチックアニマル", "pd_tag_4": "行動分析",
        "pd_arch_title": "🏗️ システムアーキテクチャ",
        "pd_arch_desc_title": "設計概要:",
        "pd_arch_content": "<strong>「クラウド-エッジ協調 + Late Fusion」</strong>方式。フロントエンドがデータを収集し、バックエンド(FastAPI)が分配：視覚はQwen-VL、聴覚は音響モデルへ。最終的にLLMとMilvus(RAG)がレポート生成。",
        "pd_clin_title": "🩺 AI臨床診断モジュール",
        "pd_clin_sub": "CVおよび医学知識ベースに基づく。4大核心診療科をカバー。",
        "pd_feat_skin": "皮膚病変検知",
        "pd_feat_skin_desc": "対照学習により真菌/ダニ/細菌性皮膚炎を区別。患部セグメンテーションと重症度判定。",
        "pd_feat_ear": "耳道健康分析",
        "pd_feat_ear_desc": "耳ダニ、マラセチア、中耳炎を識別。テクスチャおよび色分析。",
        "pd_feat_eye": "眼科疾患スクリーニング",
        "pd_feat_eye_desc": "角膜混濁、チェリーアイ、結膜炎、白内障を検知。ROI抽出。",
        "pd_feat_dig": "消化器系分析",
        "pd_feat_dig_desc": "<strong>排泄物:</strong> Bristolスケール自動採点。<br><strong>嘔吐物:</strong> 色/食物分析による緊急事態警告。",
        "pd_behav_title": "🧠 行動および認知分析",
        "pd_feat_emo": "マルチモーダル感情認識",
        "pd_feat_emo_desc": "視覚(耳/瞳孔/尻尾)と聴覚(鳴き声)を融合し、不安、痛みなど6種類の感情を識別。",
        "pd_feat_act": "異常行動モニタリング",
        "pd_feat_act_desc": "睡眠、跛行(足を引きずる)などのパターン認識。時系列データで関節炎/分離不安を警告。",
        "pd_feat_breed": "精密品種鑑定",
        "pd_feat_breed_desc": "100種以上の犬/猫品種を識別。遺伝性疾患リスク評価を支援。",
        "pd_exo_title": "🐹 エキゾチックアニマル支援",
        "pd_exo_card_title": "爬虫類および小型哺乳類",
        "pd_exo_card_sub": "犬猫以外のペットのための専門知識およびモデル構築。",
        "pd_exo_list": "<li><strong>対応種:</strong> ハムスター, ウサギ, チンチラ, カメ, トカゲ, オウム。</li><li><strong>特異診断:</strong><br>🐀 ウェットテイル, 過長歯。<br>🐢 甲羅腐敗病, 軟甲病。<br>🐦 毛引き(自傷)。</li>",
        "pd_ui_title": "📱 UI機能展示",
        "pd_ui_1": "1. メイン画面", "pd_ui_2": "2. ペット翻訳", "pd_ui_3": "3. 結果レポート"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langSelector = document.getElementById('lang-selector');
    const currentLang = localStorage.getItem('site_lang') || 'zh';
    
    if(langSelector) {
        langSelector.value = currentLang;
        langSelector.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    setLanguage(currentLang);
});

function setLanguage(lang) {
    localStorage.setItem('site_lang', lang);
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // 始终使用 innerHTML 以支持 <b> <br> 等标签
            element.innerHTML = translations[lang][key];
        }
    });
}