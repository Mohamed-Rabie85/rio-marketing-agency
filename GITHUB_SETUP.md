# 🚀 رفع المشروع على GitHub

هذا الملف يحتوي على خطوات تفصيلية لرفع موقع **RIO Marketing Solutions** على GitHub.

---

## 📋 المتطلبات الأساسية

- ✅ حساب GitHub (أنشئ واحداً على https://github.com)
- ✅ Git مثبت على جهازك
- ✅ ملفات المشروع مستخرجة

---

## 🔑 خطوات الإعداد الأولي

### الخطوة 1: تكوين Git محلياً

إذا لم تقم بتكوين Git من قبل، شغّل الأوامر التالية:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### الخطوة 2: إنشاء مستودع جديد على GitHub

1. اذهب إلى https://github.com/new
2. أدخل اسم المستودع: `rio-marketing-agency`
3. أضف وصف: `Professional marketing agency website built with React & Next.js`
4. اختر **Public** (لجعل المشروع عام)
5. **لا تختر** "Initialize this repository with a README" (لأن لدينا README بالفعل)
6. انقر على **Create repository**

---

## 📤 رفع المشروع

### الطريقة الأولى: من سطر الأوامر (الموصى به)

```bash
# 1. انتقل إلى مجلد المشروع
cd rio-marketing-agency

# 2. هيّئ Git محلياً (إذا لم تكن قد فعلت ذلك)
git init

# 3. أضف جميع الملفات
git add .

# 4. أنشئ أول commit
git commit -m "Initial commit: RIO Marketing Solutions website"

# 5. أعد تسمية الفرع الرئيسي إلى main (إذا لزم الأمر)
git branch -M main

# 6. أضف الفرع البعيد (استبدل YOUR_USERNAME بـ اسم المستخدم الخاص بك)
git remote add origin https://github.com/YOUR_USERNAME/rio-marketing-agency.git

# 7. ادفع الملفات إلى GitHub
git push -u origin main
```

### الطريقة الثانية: استخدام GitHub Desktop

1. افتح GitHub Desktop
2. انقر على **File > Add Local Repository**
3. اختر مجلد المشروع
4. انقر على **Publish repository**
5. أدخل اسم المستودع والوصف
6. انقر على **Publish Repository**

---

## ✅ التحقق من النجاح

بعد رفع المشروع، تحقق من:

1. اذهب إلى `https://github.com/YOUR_USERNAME/rio-marketing-agency`
2. تأكد من رؤية جميع الملفات
3. تأكد من رؤية README.md في الصفحة الرئيسية

---

## 🔄 تحديث المشروع لاحقاً

عندما تقوم بتعديلات على المشروع محلياً:

```bash
# 1. أضف التغييرات
git add .

# 2. أنشئ commit مع رسالة واضحة
git commit -m "Description of changes"

# 3. ادفع التغييرات
git push origin main
```

---

## 🌳 إدارة الفروع (Branches)

### إنشاء فرع جديد للميزات:

```bash
# أنشئ فرع جديد
git checkout -b feature/new-feature

# اعمل على الميزة الجديدة
# ثم أضف وأرسل التغييرات

git add .
git commit -m "Add new feature"
git push origin feature/new-feature

# ثم أنشئ Pull Request على GitHub
```

### دمج الفروع:

```bash
# انتقل إلى main
git checkout main

# ادمج الفرع الآخر
git merge feature/new-feature

# ادفع التغييرات
git push origin main
```

---

## 📝 أفضل الممارسات

### رسائل Commit الجيدة:

```bash
# ✅ جيد
git commit -m "Add contact form validation"
git commit -m "Fix mobile navigation layout"
git commit -m "Update blog post styling"

# ❌ سيء
git commit -m "fix"
git commit -m "update"
git commit -m "changes"
```

### .gitignore (مُضمن بالفعل):

تأكد من أن الملفات التالية **لن** تُرفع:

```
node_modules/
dist/
.env
.env.local
.DS_Store
```

---

## 🔗 ربط GitHub مع Vercel

بعد رفع المشروع على GitHub، يمكنك ربطه مع Vercel للنشر التلقائي:

### الخطوات:

1. اذهب إلى https://vercel.com
2. انقر على **New Project**
3. اختر **Import Git Repository**
4. ابحث عن `rio-marketing-agency`
5. اختر المستودع
6. انقر على **Import**
7. اترك الإعدادات الافتراضية
8. انقر على **Deploy**

### النتيجة:

- سيتم نشر الموقع تلقائياً عند كل push إلى main
- ستحصل على رابط مثل: `https://rio-marketing-agency.vercel.app`

---

## 🆘 استكشاف الأخطاء

### المشكلة: "fatal: not a git repository"

```bash
# الحل: هيّئ Git في المجلد
git init
```

### المشكلة: "Permission denied (publickey)"

```bash
# الحل: أضف مفتاح SSH
# اتبع: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
```

### المشكلة: "Your branch is ahead of 'origin/main'"

```bash
# الحل: ادفع التغييرات
git push origin main
```

---

## 📚 مراجع مفيدة

- **GitHub Docs:** https://docs.github.com
- **Git Cheat Sheet:** https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf
- **Vercel Docs:** https://vercel.com/docs

---

## 🎉 تم!

تم رفع مشروع RIO Marketing Solutions على GitHub بنجاح! 🚀

الخطوة التالية: ربط GitHub مع Vercel للنشر التلقائي.

---

**آخر تحديث:** ديسمبر 2024
