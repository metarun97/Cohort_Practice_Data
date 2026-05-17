# 🧾 AWS Free Tier SAFE CHECKLIST (2–5 Minute Daily Check)

## 🔥 Purpose
Ensure no hidden AWS billing is running accidentally while learning or building projects.

---

# 1️⃣ EC2 CHECK (MOST IMPORTANT)
AWS Console → EC2 → Instances

✔ Check:
- No **running instances**
- If instance not needed → **Terminate (NOT stop)**
- EC2 → Volumes:
  - No **unattached volumes**
- EC2 → Snapshots:
  - Delete unused snapshots
- EC2 → Elastic IPs:
  - Release unused IPs

---

# 2️⃣ NAT GATEWAY CHECK ⚠️
VPC → NAT Gateways

✔ Rule:
- If anything exists → **DELETE immediately**
- Not needed for basic learning projects

---

# 3️⃣ RDS / DATABASE CHECK 🧠
RDS → Databases

✔ Ensure:
- No running database
- No leftover snapshots

---

# 4️⃣ S3 STORAGE CHECK 🪣
S3 → Buckets

✔ Check:
- Empty or unused buckets → delete
- Large files → remove
- Versioning OFF (if not needed)

---

# 5️⃣ CLOUDWATCH LOGS 📊
CloudWatch → Log groups

✔ Ensure:
- No large or unnecessary log groups
- Delete if not needed

---

# 6️⃣ IAM USERS 👤
IAM → Users

✔ Check:
- Remove extra users
- Delete unused access keys

---

# 7️⃣ BILLING DASHBOARD 💰 (MANDATORY)
Billing → Bills

✔ Check:
- Any unexpected charges (EC2, S3, NAT, etc.)

---

# 8️⃣ BUDGET ALERT SETUP 🚨
Billing → Budgets

✔ Set:
- Budget: $1 / ₹100
- Alerts: 50%, 80%, 100%

---

# 🧠 GOLDEN RULE
> "Stop is NOT safe. Only Delete is safe in AWS learning."

---

# ✅ FINAL SAFE STATUS CHECK
If all true:
- No EC2 running
- No NAT Gateway
- No RDS
- No heavy S3 storage

👉 THEN YOUR AWS ACCOUNT IS SAFE 💯

---

# ⚡ QUICK DAILY FLOW
1. Open Billing Dashboard
2. Check EC2
3. Check S3
4. Check VPC (NAT)
5. Done in 2–5 minutes

