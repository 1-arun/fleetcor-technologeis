import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import toast from "react-hot-toast";

const initial = {
  name: "", email: "", company: "", projectType: "", budget: "", message: "",
};

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim() || form.message.length < 10) e.message = "Min 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) {
      toast.error("Please fix the highlighted fields");
      return;
    }
    toast.success("Message submitted successfully 🚀");
    setForm(initial);
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-3xl w-full max-w-2xl p-7 md:p-9 relative max-h-[92vh] overflow-y-auto"
            style={{ boxShadow: "0 0 60px rgba(0,194,255,0.25)" }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10"
            >
              <X size={20} />
            </button>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Start Your <span className="grad-text">Project</span>
            </h3>
            <p className="text-textsec text-sm mb-6">
              Tell us about your idea — we’ll get back within one business day.
            </p>

            <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Full Name" value={form.name} onChange={update("name")} error={errors.name} />
              <Field label="Email" value={form.email} onChange={update("email")} error={errors.email} type="email" />
              <Field label="Company Name" value={form.company} onChange={update("company")} />
              <SelectField
                label="Project Type"
                value={form.projectType}
                onChange={update("projectType")}
                options={["Web App", "Mobile App", "AI / ML", "Cloud", "Custom Software", "UI/UX"]}
              />
              <SelectField
                label="Budget"
                value={form.budget}
                onChange={update("budget")}
                options={["< $5k", "$5k – $15k", "$15k – $50k", "$50k+"]}
              />
              <div className="md:col-span-2">
                <Field
                  label="Message"
                  value={form.message}
                  onChange={update("message")}
                  error={errors.message}
                  textarea
                />
              </div>
              <div className="md:col-span-2 flex flex-col-reverse sm:flex-row sm:justify-end gap-3 mt-2">
                <button type="button" onClick={onClose} className="btn-ghost">
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  <Send size={16} /> Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, value, onChange, error, type = "text", textarea }) {
  const cls =
    "w-full bg-white/5 border border-blue-500/25 focus:border-cyanp focus:ring-2 focus:ring-cyanp/30 rounded-xl px-4 py-3 outline-none text-sm transition";
  return (
    <label className="block">
      <span className="text-xs text-textsec mb-1 inline-block">{label}</span>
      {textarea ? (
        <textarea rows={4} value={value} onChange={onChange} className={cls} />
      ) : (
        <input type={type} value={value} onChange={onChange} className={cls} />
      )}
      {error && <span className="text-xs text-red-400 mt-1 block">{error}</span>}
    </label>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="text-xs text-textsec mb-1 inline-block">{label}</span>
      <select
        value={value}
        onChange={onChange}
        className="w-full bg-white/5 border border-blue-500/25 focus:border-cyanp focus:ring-2 focus:ring-cyanp/30 rounded-xl px-4 py-3 outline-none text-sm transition"
      >
        <option value="" className="bg-bg">Select…</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-bg">{o}</option>
        ))}
      </select>
    </label>
  );
}
